/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { colors, spacingY } from '../constants/Them';
import MyText from './MyText';

const funnyTexts = [
  '🍕 Hasnain is negotiating with the pizza AI...',
  "🧠 Feeding Hasnain's brain... and belly!",
  '🥦 Spotting greens Hasnain might avoid...',
  '📷 Camera says: “Is that nihari again?”',
  '🧪 Breaking down biryani atoms...',
  '🍔 Counting invisible calories...',
  '🧞‍♂️ Summoning food genie for Hasnain...',
  '🔍 Scanning… this might be emotional.',
  '🤖 Asking ChatGPT if samosa is a salad...',
];

function FunnyLoading() {
  const [textIndex, setTextIndex] = useState(0);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(1);
  const dotOpacity = useSharedValue(1);

  // Text animation
  useEffect(() => {
    opacity.value = withTiming(1, { duration: 500 });

    const interval = setInterval(() => {
      opacity.value = 0;
      setTimeout(() => {
        setTextIndex(prev => (prev + 1) % funnyTexts.length);
        opacity.value = withTiming(1, { duration: 500 });
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [opacity]);

  // Text style animation
  const animatedTextStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  // Pulsing dot animation
  useEffect(() => {
    dotOpacity.value = withRepeat(
      withSequence(
        withTiming(0.3, { duration: 500 }),
        withTiming(1, { duration: 500 }),
      ),
      -1,
      true,
    );
  }, [dotOpacity]);

  // const animatedDotStyle = useAnimatedStyle(() => ({
  //   opacity: dotOpacity.value,
  // }));

  return (
    <View style={styles.container}>
      {/* <Animated.View style={[styles.dotsContainer, animatedDotStyle]}>
        <View style={styles.dot} />
        <View style={[styles.dot, { marginHorizontal: 5 }]} />
        <View style={styles.dot} />
      </Animated.View> */}

      <Animated.View style={[styles.textWrapper, animatedTextStyle]}>
        <MyText size={2} style={{ textAlign: 'center' }} color={colors.primary}>
          {funnyTexts[textIndex]}
        </MyText>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacingY.lg,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: spacingY.sm,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  textWrapper: {
    paddingHorizontal: 20,
  },
});

export default FunnyLoading;
