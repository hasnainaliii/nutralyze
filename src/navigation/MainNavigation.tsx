import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamList } from '../constants/Types';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator<StackParamList>();

function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigation;
