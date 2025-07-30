import { RadarChart } from 'react-native-gifted-charts';

const RadarChartComp = () => {
  return (
    <RadarChart
      data={[42, 40, 35, 40, 38, 55]}
      labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
      labelConfig={{ stroke: 'blue', fontWeight: 'bold' }}
      dataLabels={['$42', '$40', '$35', '$40', '$38', '$55']}
      dataLabelsConfig={{ stroke: 'brown' }}
      dataLabelsPositionOffset={0}
      maxValue={70}
    />
  );
};

export default RadarChartComp;
