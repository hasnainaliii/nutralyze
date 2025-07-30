/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View } from 'react-native';
import Avatar from '../../components/Avatar';
import MiniCalendar from '../../components/MiniCalendar';
import MyText from '../../components/MyText';
import ScreenWrapper from '../../components/ScreenWrapper';
import SemiPieChart from '../../components/SemiPieChart';
import SmallCard from '../../components/SmallCard';
import { colors, spacingX, spacingY } from '../../constants/Them';

function Home() {
  // const hour = new Date().getHours();
  // const greeting =
  //   hour < 12
  //     ? 'Good Morning ☀️'
  //     : hour < 18
  //     ? 'Good Afternoon  🌞'
  //     : 'Good Evening 🌝';
  return (
    <>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#fff" /> */}
      <ScreenWrapper>
        <View style={styles.container}>
          <View style={styles.header}>
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                width: '100%',
                alignItems: 'center',
              }}
            >
              <Avatar />
              <MyText color={colors.primary} size={1.9}>
                Hasnain Ali
              </MyText>
            </View>

            {/* <MyText>Every bite counts — let's make it healthy! 🥦✨</MyText> */}
          </View>
          {/* <SlidingComponent /> */}
          <MiniCalendar />
          <MyText size={2.5} color={colors.black}>
            Count your Daily Calories
          </MyText>
          <SemiPieChart />
          {/* <RadarChartComp /> */}
          <View style={styles.card}>
            <SmallCard iconBackgroundColor="#eae275" />
            <SmallCard
              backgroundColor={colors.secondary}
              iconName={'egg'}
              Title="Protein"
              TotalValue={30}
              iconBackgroundColor={colors.secondary20}
            />
          </View>
          <MyText size={4} color="black" style={{ marginTop: spacingY.md }}>
            Diet Plans
          </MyText>
        </View>
      </ScreenWrapper>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    paddingHorizontal: spacingX.sm,
  },
  header: {
    alignItems: 'flex-start',
    gap: 5,
  },
  card: {
    flexDirection: 'row',
    gap: 10,

    justifyContent: 'space-between',
    marginTop: spacingY.lg,
  },
});
export default Home;
