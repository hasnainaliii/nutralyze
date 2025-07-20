import { PacmanIndicator } from 'react-native-indicators';
import { colors } from '../constants/Them';
import { StyleSheet, View } from 'react-native';
function MyLoading({ color = colors.primary, size = 40 }) {
  return (
    <View style={styles.container}>
      <PacmanIndicator color={color} size={size} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MyLoading;
