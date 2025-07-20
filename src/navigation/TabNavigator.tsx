import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../constants/Types';
import Home from '../features/home/Home';
import Profile from '../features/home/Profile';

const Tab = createBottomTabNavigator<TabParamList>();
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
