import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamList } from '../constants/Types';
import SignIn from '../features/auth/SignIn';
import SignUp from '../features/auth/SignUp';
import GetStarted from '../features/auth/GetStarted';

const Stack = createNativeStackNavigator<StackParamList>();

function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName="GetStarted">
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
