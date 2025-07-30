// components/HotNowCard.js
import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import MyText from './MyText';
import { colors, dynamicSpacingY, spacingX } from '../constants/Them';

const { width: screenWidth } = Dimensions.get('window');

function HotNowCard({ item }: any) {
  return (
    <View style={styles.cardContainer}>
      <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
      <View style={styles.cardTextContent}>
        <MyText style={styles.cardTitle} size={1.8} color="black">
          {item.title}
        </MyText>
        <MyText
          style={styles.cardSubtitle}
          size={1.2}
          color={colors.secondary || '#666666'}
        >
          {item.subtitle}
        </MyText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: screenWidth * 0.5,
    marginRight: spacingX.sm || 10,
    borderRadius: 12,
    backgroundColor: colors.white || '#FFFFFF', // Explicitly white background
    overflow: 'hidden',
    shadowColor: colors.black || '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: dynamicSpacingY(15),
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardTextContent: {
    padding: spacingX.sm || 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: dynamicSpacingY(0.5),
    color: colors.black || '#333333', // Dark text
  },
  cardSubtitle: {
    color: colors.black_text || '#666666', // Lighter text
  },
});

export default HotNowCard;
