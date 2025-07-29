/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import RNFS from 'react-native-fs';
import { launchImageLibrary } from 'react-native-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import FunnyLoading from '../../components/FunnyLoading';
import MyText from '../../components/MyText';
import {
  colors,
  dynamicSpacingY,
  spacingX,
  spacingY,
} from '../../constants/Them';
import { TabParamList } from '../../constants/Types';
import MyLoading from '../../components/MyLoading';
import ScanBottomSheet from './ScanBottomSheet';
import { getUSDAFoodData } from '../../services/ScanService';

function Scan() {
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice('back');
  const cameraRef = useRef<Camera>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [galleryImage, setGalleryImage] = useState<string | null>(null);
  const naviation = useNavigation<NativeStackNavigationProp<TabParamList>>();
  const [loading, setLoading] = useState<boolean>(false);
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);
  const [scannedFood, setScannedFood] = useState({});

  async function pickImageFromGallery() {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
    });

    if (result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri || null;
      if (uri) {
        setGalleryImage(uri);
      }
    }
  }

  async function takePicture() {
    try {
      if (cameraRef.current == null) {
        throw new Error('Camera not found');
      }

      const photo = await cameraRef.current.takePhoto({
        flash: 'off',
        enableShutterSound: true,
        enableAutoDistortionCorrection: true,
      });

      const uri = 'file://' + photo.path;

      setPhotoUri(uri);
    } catch (error) {
      console.error('Error capturing photo:', error);
    }
  }

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  useEffect(() => {
    console.log('UseEffect is called 1');
    if (!photoUri && !galleryImage) {
      return;
    }
    console.log('UseEffect is called');
    handleScanImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photoUri, galleryImage]);

  if (!device) {
    return (
      <View>
        <MyText>No camera found</MyText>
      </View>
    );
  }

  if (!hasPermission) {
    return <ActivityIndicator />;
  }

  async function handleScanImage() {
    try {
      const uri = photoUri || galleryImage;
      if (!uri) {
        console.warn('No image selected');
        return;
      }

      setLoading(true);
      console.log('SETLOADING TRUE');

      // Convert image to base64
      const filePath = uri.replace('file://', '');
      const base64 = await RNFS.readFile(filePath, 'base64');
      console.log('BASE FILE CONVERTED');
      // Send to Clarifai
      // console.log(base64);
      const response = await fetch(
        'https://api.clarifai.com/v2/users/clarifai/apps/main/models/food-item-recognition/versions/1d5fd481e0cf4826aa72ec3ff049e044/outputs',
        {
          method: 'POST',
          headers: {
            Authorization: 'Key 2b30aff6571d4516bfee3073739fe092',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_app_id: {
              user_id: 'clarifai',
              app_id: 'main',
            },
            inputs: [
              {
                data: {
                  image: {
                    base64,
                  },
                },
              },
            ],
          }),
        },
      );
      console.log('GOT THE RESULT');

      const result = await response.json();

      if (result?.outputs?.[0]?.data?.concepts) {
        const predictions = result.outputs[0].data.concepts;

        console.log('🍔 Clarifai Predictions:');
        // predictions.forEach((item: any) => {
        //   console.log(`${item.name} (${(item.value * 100).toFixed(1)}%)`);
        // });

        const top3 = predictions.slice(0, 3).map((item: any) => ({
          name: item.name,
          percentage: +(item.value * 100).toFixed(1),
        }));

        const finalResult = await getUSDAFoodData(top3[0].name);

        if (finalResult) {
          setScannedFood(finalResult);
          setOpenBottomSheet(true);
        }
        // console.log(finalResult);
        // console.log('🍽️ Top 3:', top3);
      } else {
        console.warn('No predictions found');
      }
    } catch (error) {
      console.error('Error scanning image:', error);
    } finally {
      setLoading(false);
    }
  }
  console.log(scannedFood);

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            overflow: 'hidden',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <Pressable
            onPress={() => naviation.goBack()}
            style={{
              position: 'absolute',
              zIndex: 2,
              left: spacingX.md,
              top: spacingY.md,
              padding: spacingY.xxs,
              // backgroundColor: '#FDF4E7',
              borderRadius: 20,
            }}
          >
            <MaterialIcons name="arrow-back" size={30} color={colors.white} />
          </Pressable>

          {photoUri || galleryImage ? (
            <View>
              <View
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  right: spacingX.md,
                  top: spacingY.md,
                }}
              >
                <Pressable
                  onPress={() => {
                    setGalleryImage('');
                    setPhotoUri('');
                  }}
                >
                  <MaterialIcons
                    name="cancel"
                    size={35}
                    color={colors.secondary}
                  />
                </Pressable>
              </View>
              <View>
                <Image
                  source={{ uri: (photoUri || galleryImage) as string }}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 10,
                    marginTop: 10,
                  }}
                  resizeMode="cover"
                  blurRadius={loading ? 10 : 0}
                />

                {loading && (
                  <View
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'rgba(0,0,0,0.2)',
                    }}
                  >
                    <MyLoading color={colors.primary} />
                    {/* <FunnyLoading /> */}
                  </View>
                )}
              </View>
            </View>
          ) : (
            <Camera
              ref={cameraRef}
              style={{ flex: 1 }}
              device={device}
              isActive={true}
              photo={true}
            />
          )}
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: dynamicSpacingY(20),
            backgroundColor: 'white',
            flexDirection: 'row',
            borderTopStartRadius: 25,
            borderTopEndRadius: 25,
            paddingHorizontal: spacingX.lg,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {loading ? (
            <FunnyLoading />
          ) : (
            <>
              <Pressable
                onPress={pickImageFromGallery}
                style={{
                  padding: spacingY.xxs,
                  backgroundColor: '#FDF4E7',
                  borderRadius: 20,
                }}
              >
                <MaterialIcons
                  name="insert-photo"
                  size={30}
                  color={colors.secondary}
                />
              </Pressable>

              <TouchableOpacity onPress={takePicture}>
                <MaterialIcons
                  name="photo-camera"
                  size={60}
                  color={colors.secondary}
                />
              </TouchableOpacity>

              <Pressable
                style={{
                  padding: spacingY.xxs,
                  backgroundColor: '#FDF4E7',
                  borderRadius: 20,
                }}
              >
                <Ionicons name="repeat" size={30} color={colors.secondary} />
              </Pressable>
            </>
          )}
        </View>
      </SafeAreaView>
      {openBottomSheet && (
        <ScanBottomSheet
          scannedFood={scannedFood}
          setScannedFood={setScannedFood}
          setOpenBottomSheet={setOpenBottomSheet}
        />
      )}
    </>
  );
}

export default Scan;
