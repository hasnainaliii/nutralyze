import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BarIndicator } from 'react-native-indicators';
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
  'Analyzing cheesy goodness...',
  'Searching for extra pepperoni 🍕...',
  'Asking AI chef...',
  'Estimating calories... please hold the fries 🍟',
  'Running food magic spell 🔮',
  'Scanning your cravings...',
  'Roasting data, not marshmallows 🔥',
];

function FunnyLoading() {
  const [text, setText] = useState(funnyTexts[0]);
  console.log('in funny loading', 1);

  // Change text every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const random = funnyTexts[Math.floor(Math.random() * funnyTexts.length)];
      setText(random);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Animation: bounce + fade
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  useEffect(() => {
    scale.value = withRepeat(
      withSequence(withTiming(1.1), withTiming(1)),
      -1,
      true,
    );
    opacity.value = withRepeat(
      withSequence(withTiming(0.8), withTiming(1)),
      -1,
      true,
    );
  }, [opacity, scale]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  return (
    <View style={styles.container}>
      <BarIndicator color={colors.primary} count={5} size={50} />
      <Animated.View style={[styles.textWrapper, animatedStyle]}>
        <MyText>{text}</MyText>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacingY.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    marginTop: spacingY.md,
  },
  text: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FunnyLoading;
