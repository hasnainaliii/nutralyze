/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import MyText from '../../components/MyText';
import NoFoodSVG from '../../components/NoFoodSVG';
import ScreenWrapper from '../../components/ScreenWrapper';
import { colors, dynamicSpacingX, spacingY } from '../../constants/Them';

function Liked() {
  const [selected, setSelected] = useState<'food' | 'recipes'>('food');

  return (
    <ScreenWrapper style={{ paddingHorizontal: dynamicSpacingX(10) }}>
      <Animated.View entering={FadeIn.delay(20)} style={styles.container}>
        <MyText
          color={colors.black}
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            marginBottom: spacingY.md,
          }}
        >
          Favorites
        </MyText>

        <View style={styles.switchContainer}>
          <Pressable
            onPress={() => setSelected('food')}
            style={[
              styles.button,
              selected === 'food' && styles.selectedButton,
              { borderTopLeftRadius: 15, borderBottomLeftRadius: 15 },
            ]}
          >
            <MyText
              style={[
                styles.buttonText,
                ...(selected === 'food' ? [styles.selectedText] : []),
              ]}
            >
              Food
            </MyText>
          </Pressable>

          <Pressable
            onPress={() => setSelected('recipes')}
            style={[
              styles.button,
              selected === 'recipes' && styles.selectedButton,
              { borderTopRightRadius: 15, borderBottomRightRadius: 15 },
            ]}
          >
            <MyText
              style={[
                styles.buttonText,
                ...(selected === 'recipes' ? [styles.selectedText] : []),
              ]}
            >
              Recipes
            </MyText>
          </Pressable>
        </View>
        <View
          style={{
            flex: 1,

            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <NoFoodSVG />

          <MyText
            size={3}
            color="#545252"
            style={{
              paddingTop: spacingY.md,
              paddingBottom: spacingY.xs,
              // backgroundColor: 'red',
              fontWeight: '100',
            }}
          >
            {selected === 'food' ? 'No Food Found' : 'No Recipes Found'}
          </MyText>
          <MyText>
            {selected === 'food'
              ? `You don't have any save Food.`
              : ` You don't have any save recipes.`}
          </MyText>
          <MyText>Go ahead and save some</MyText>
        </View>
      </Animated.View>
    </ScreenWrapper>
  );
}

export default Liked;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    paddingTop: spacingY.lg,
    // backgroundColor: 'blue',
    // marginBottom: spacingY.lg,
  },
  switchContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff4ee',
    borderRadius: 15,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
    paddingVertical: spacingY.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#ff8976',
  },
  buttonText: {
    color: '#ff8976',
    fontWeight: '600',
  },
  selectedText: {
    color: 'white',
  },
});
