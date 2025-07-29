/* eslint-disable react-native/no-inline-styles */
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MyButton from '../../components/MyButton';
import MyText from '../../components/MyText';
import { colors, spacingX, spacingY } from '../../constants/Them';
import { useEffect, useState } from 'react';
import { getCartoonImage } from '../../services/ScanService';

function ScanBottomSheet({ scannedFood, setOpenBottomSheet }: any) {
  const getNutrient = (name: string) => {
    const nutrient = scannedFood?.nutrients?.[name];
    return nutrient ? `${nutrient.amount}${nutrient.unit}` : 'N/A';
  };

  const highlightKeys = [
    'Protein',
    'Carbohydrate, by difference',
    'Total lipid (fat)',
    'Energy',
  ];

  const [cartoonImageUri, setCartoonImageUri] = useState<string | null>(null);

  useEffect(() => {
    if (scannedFood?.name) {
      getCartoonImage(scannedFood.name).then(setCartoonImageUri);
    }
  }, [scannedFood]);

  console.log(cartoonImageUri);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Close Icon */}
          <View style={styles.iconContainer}>
            <Pressable onPress={() => setOpenBottomSheet(false)}>
              <Feather name="x" size={30} />
            </Pressable>
          </View>

          {/* Food Image */}

          {cartoonImageUri ? (
            <Image
              source={{ uri: cartoonImageUri }}
              style={styles.image}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={require('../../assets/images/nutralyze-Logo-only.png')}
              style={styles.image}
              resizeMode="contain"
            />
          )}

          {/* Highlighted Nutrients */}
          <View style={styles.nutrionsText}>
            {highlightKeys.map((key, index) => (
              <View key={index} style={{ alignItems: 'center' }}>
                <MyText color={colors.secondary} size={1.7}>
                  {key.split(',')[0]}
                </MyText>
                <MyText color={colors.secondary} size={2.5}>
                  {getNutrient(key)}
                </MyText>
              </View>
            ))}
          </View>

          {/* All Nutrients */}
          <View style={styles.details}>
            <MyText color="black" size={2.3}>
              Nutrition Facts
            </MyText>
            <View style={styles.nutrientsList}>
              {Object.entries(scannedFood?.nutrients || {}).map(
                ([key, value]: any, index) => (
                  <View key={index} style={styles.nutrientItem}>
                    <MyText size={1.6} color="black">
                      {key}
                    </MyText>
                    <MyText size={1.6} color={colors.secondary}>
                      {value.amount}
                      {value.unit}
                    </MyText>
                  </View>
                ),
              )}
            </View>
          </View>

          {/* Description */}
          <View style={styles.details}>
            <MyText color="black" size={2.3}>
              Description
            </MyText>
            <MyText
              size={1.6}
              style={{ lineHeight: 19, paddingTop: spacingY.xs }}
            >
              {scannedFood?.description || 'No description available.'}
            </MyText>
          </View>

          {/* Add to Favorites Button */}
          <View style={{ alignItems: 'center', marginBottom: spacingY.xl }}>
            <MyButton loading={false}>
              <MyText color="white" size={2.5}>
                Add to Favorites
              </MyText>
            </MyButton>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default ScanBottomSheet;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
    width: '100%',
    flexDirection: 'column-reverse',
  },
  main: {
    height: '80%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  scrollContent: {
    paddingBottom: spacingY.xl,
  },
  iconContainer: {
    paddingHorizontal: spacingX.md,
    paddingTop: spacingY.md,
  },

  image: {
    width: '100%',
    aspectRatio: 1,
    alignSelf: 'center',
    height: '15%',
    borderRadius: 20,
    // backgroundColor: 'red',
  },
  nutrionsText: {
    paddingHorizontal: spacingX.xl,
    paddingVertical: spacingY.lg,
    backgroundColor: '#FFF8EE',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    // flexWrap: 'wrap',
  },
  details: {
    paddingVertical: spacingY.lg,
    paddingHorizontal: spacingX.md,
  },
  nutrientsList: {
    marginTop: spacingY.sm,
    gap: 10,
  },
  nutrientItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
    borderBottomColor: '#ccc',
    paddingVertical: 4,
  },
});
