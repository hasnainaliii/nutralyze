/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'; // Assuming this is installed
import {
  dynamicSpacingX,
  dynamicSpacingY,
  fontSizes,
  spacingX,
  spacingY,
} from '../constants/Them';
import MyText from './MyText';

function SmallCard({
  backgroundColor,
  iconBackgroundColor,
  iconName,
  Title,
  Value,
  TotalValue,
  loading = false,
}: any) {
  // Calculate progress percentage for the bar
  const progressPercentage = TotalValue > 0 ? (Value / TotalValue) * 100 : 0;

  // Determine colors based on the image provided
  const cardBackgroundColor = '#F8F18A'; // Light yellow from image

  const iconColor = '#333333'; // Dark color for icon
  const titleColor = '#333333'; // Dark color for title
  const progressTrackColor = '#E0E0E0'; // Light gray for the full track
  const progressBarColor = '#333333'; // Dark color for the filled part
  const valueTextColor = '#333333'; // Dark color for values

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: backgroundColor || cardBackgroundColor },
      ]}
    >
      <View style={styles.iconContainer}>
        <View
          style={[styles.iconCircle, { backgroundColor: iconBackgroundColor }]}
        >
          <FontAwesome6
            name={iconName || 'wheat-awn'}
            size={18}
            color={iconColor}
          />
        </View>
      </View>

      <MyText style={[styles.title, { color: titleColor }]}>
        {Title || 'Carbs'}
      </MyText>

      {/* Progress Bar */}
      <View style={styles.progressBarWrapper}>
        <View
          style={[
            styles.progressBarTrack,
            { backgroundColor: progressTrackColor },
          ]}
        >
          <View
            style={[
              styles.progressBarFill,
              {
                backgroundColor: progressBarColor,
                width: loading ? '0%' : `${progressPercentage}%`, // Animate width for loading
              },
              loading && styles.progressBarLoading, // Apply loading animation style
            ]}
          />
        </View>
      </View>

      {/* Value and TotalValue */}
      <View style={styles.valueContainer}>
        <MyText style={[styles.valueText, { color: valueTextColor }]}>
          {Value !== undefined ? `${Value}g` : '140g'}
        </MyText>
        <MyText style={[styles.valueText, { color: valueTextColor }]}>
          {TotalValue !== undefined ? `${TotalValue}g` : '200g'}
        </MyText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: dynamicSpacingX(43),
    height: dynamicSpacingY(18),
    borderRadius: 15,
    paddingVertical: spacingY.md || 15,
    paddingHorizontal: spacingX.md || 15,
    alignItems: 'flex-start',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  iconContainer: {
    position: 'absolute',
    top: spacingY.md,
    right: spacingX.md,
    zIndex: 1,
  },
  iconCircle: {
    width: dynamicSpacingX(11),
    height: dynamicSpacingY(5),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: fontSizes.medium,
    fontWeight: 'bold',

    marginTop: dynamicSpacingY(6),
  },
  progressBarWrapper: {
    width: '100%',
    marginBottom: 5,
    marginTop: 10,
  },
  progressBarTrack: {
    height: 8,
    borderRadius: 4, // Rounded ends for the track
    width: '100%',
    // Background color set by default
    overflow: 'hidden', // Ensures fill stays within track
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
    // Width and background color set dynamically
  },
  progressBarLoading: {
    // Basic loading animation (you might want a more complex one)
    // This will make it animate from 0% to the actual percentage
    // You'd typically use Animated API for smoother, continuous loading effects
    // For a simple line loading, a width transition is common.
    // This simple style will just show it at 0% if loading is true.
    // For actual animation, you'd use Animated.timing or similar.
    // As a placeholder, this shows it "empty" when loading.
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 5,
  },
  valueText: {
    fontSize: 12,
    // Color set by default
  },
});

export default SmallCard;
