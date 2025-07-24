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
import { launchImageLibrary } from 'react-native-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import MyText from '../../components/MyText';
import {
  colors,
  dynamicSpacingY,
  spacingX,
  spacingY,
} from '../../constants/Them';
import { TabParamList } from '../../constants/Types';

function Scan() {
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice('back');
  const cameraRef = useRef<Camera>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [galleryImage, setGalleryImage] = useState<string | null>(null);
  const naviation = useNavigation<NativeStackNavigationProp<TabParamList>>();
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
      console.log('selected Image Uri', result.assets);
      console.log('selected Image Uri', result.assets[0].uri);
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
      console.log('Photo captured:', uri);
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

  return (
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
            <Image
              source={{ uri: (photoUri || galleryImage) as string }}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
                marginTop: 10,
              }}
              resizeMode="cover"
            />
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
      </View>
    </SafeAreaView>
  );
}

export default Scan;
