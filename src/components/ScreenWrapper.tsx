import { StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { spacingX } from '../constants/Them';

function ScreenWrapper({ children }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
    backgroundColor: '#ffffff',
    paddingHorizontal: spacingX.xxs,
  },
});
export default ScreenWrapper;
