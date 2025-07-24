import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../components/TabBar';
import { TabParamList } from '../constants/Types';
import Scan from '../features/Scanning/Scan';
import Home from '../features/home/Home';
import Liked from '../features/liked/Liked';
import Profile from '../features/profile/Profile';
import Search from '../features/search/Search';

const Tab = createBottomTabNavigator<TabParamList>();

function TabNavigator() {
  return (
    <Tab.Navigator tabBar={CustomTabBar}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{ headerShown: false, tabBarStyle: { display: 'none' } }}
      />
      <Tab.Screen
        name="Liked"
        component={Liked}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
function CustomTabBar(props: any) {
  return <TabBar {...props} />;
}
export default TabNavigator;
