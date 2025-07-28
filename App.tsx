import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Context from './src/context/Context';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <Context>
          <RootNavigator />
        </Context>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
