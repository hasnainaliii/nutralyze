/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { colors, spacingX, spacingY } from '../constants/Them';
import MyText from './MyText';

const pieData = [
  {
    value: 70,
    color: colors.primary60,
  },
  {
    value: 30,
    color: colors.white,
  },
];

function SemiPieChart() {
  return (
    <View style={styles.container}>
      <MyText size={3} style={{ alignSelf: 'flex-start' }}>
        Calories
      </MyText>
      <PieChart
        data={pieData}
        donut
        // showGradient
        // sectionAutoFocus
        // startAngle={-90}

        semiCircle
        radius={90}
        innerRadius={60}
        innerCircleColor={colors.primary}
        centerLabelComponent={centerLabel}
      />
    </View>
  );
}
function centerLabel() {
  return (
    <View style={styles.centerLabel}>
      <MyText style={styles.centerValueText}>
        {100 - pieData[0].value} left
      </MyText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    borderRadius: 20,
    gap: 15,
    paddingVertical: spacingY.md,
    paddingHorizontal: spacingX.md,
  },
  centerLabel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerValueText: {
    color: colors.white,
  },
  centerLabelText: {
    fontSize: 14, // Smaller font for "Left"
    color: colors.black_text,
  },
});

export default SemiPieChart;
