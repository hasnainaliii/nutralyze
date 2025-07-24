import { StyleSheet, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import { colors, spacingY } from '../constants/Them';
import MyText from './MyText';
function ProfileOptions() {
  return (
    <View style={styles.container}>
      <View style={styles.iconStyle}>
        <Octicons name="person" size={20} color={colors.secondary} />
      </View>
      <MyText>ProfileOptions</MyText>
    </View>
  );
}

export default ProfileOptions;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    width: '80%',

    alignItems: 'center',
    // paddingVertical: spacingY.sm,
    // paddingHorizontal: spacingX.md,
    borderRadius: 20,
  },
  iconStyle: {
    backgroundColor: colors.primary,
    padding: spacingY.md,
    borderRadius: 10,
  },
});
