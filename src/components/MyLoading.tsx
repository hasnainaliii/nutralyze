import { BarIndicator } from 'react-native-indicators';
import { colors, spacingY } from '../constants/Them';
import { StyleSheet, View } from 'react-native';
function MyLoading({ color = colors.white, size = 40 }) {
  return (
    <View style={styles.container}>
      <BarIndicator color={color} size={size} count={4} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacingY.md,
  },
});
export default MyLoading;
