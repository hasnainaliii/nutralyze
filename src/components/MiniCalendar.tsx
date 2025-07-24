/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors, dynamicSpacingX, spacingX, spacingY } from '../constants/Them';
import { getDayOfMonth } from '../utils/helper';
import MyText from './MyText';

const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function MiniCalendar({
  onDaySelect,
}: {
  onDaySelect?: (dayIndex: number) => void;
}) {
  const today = new Date();
  const currentDayIndex = today.getDay() === 0 ? 6 : today.getDay() - 1; // Sunday is 0 in JS

  const [selectedDay, setSelectedDay] = useState(currentDayIndex);

  const handleDayPress = (index: number) => {
    setSelectedDay(index);
    onDaySelect?.(index); // Callback if needed
  };

  return (
    <View style={styles.container}>
      {dayNames.map((day, index) => (
        <Pressable
          key={index}
          style={[styles.dayItem, selectedDay === index && styles.selectedDay]}
          onPress={() => handleDayPress(index)}
        >
          <MyText color={colors.black}>{day}</MyText>
          <MyText
            size={1.8}
            style={[
              styles.dateText,
              selectedDay === index ? { color: 'white' } : {},
            ]}
          >
            {getDayOfMonth(today, index)}
          </MyText>
        </Pressable>
      ))}
    </View>
  );
}

export default MiniCalendar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#c8dfbf',
    paddingHorizontal: spacingY.md,
    borderRadius: 10,
    paddingVertical: spacingY.md,
    marginVertical: spacingY.lg,
    marginHorizontal: spacingX.xxs,
  },
  dayItem: {
    alignItems: 'center',

    paddingVertical: spacingY.xs,
    paddingHorizontal: dynamicSpacingX(2.3),
    borderRadius: 10,
    gap: 8,
  },

  dateText: {
    color: '#666',
  },
  selectedDay: {
    backgroundColor: colors.primary20, // Green
    borderRadius: 20,
  },
  // todayBorder: {
  //   borderWidth: 1,
  //   borderColor: '#50C878',
  // },
});
