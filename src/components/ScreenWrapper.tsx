import { StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { spacingX, spacingY } from '../constants/Them';

function ScreenWrapper({ children, style }: any) {
  return (
    <SafeAreaView style={[styles.container, { ...style }]}>
      <StatusBar barStyle={'dark-content'} />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacingY.sm,
    backgroundColor: '#ffffff',
    paddingHorizontal: spacingX.xxs,
  },
});
export default ScreenWrapper;
