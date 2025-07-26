/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, dynamicSpacingX, spacingX, spacingY } from '../constants/Them';
import MyText from './MyText';
function ProfileOptions({ title, iconName }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.iconStyle}>
        {title === 'Log Out' ? (
          <Ionicons name="log-out" size={20} color={colors.secondary} />
        ) : (
          <Octicons name={iconName} size={20} color={colors.secondary} />
        )}
      </View>
      <MyText style={{ flex: 1, fontWeight: 'bold' }}>{title}</MyText>
      <View>
        <Octicons name="chevron-right" size={30} color={colors.black_text} />
      </View>
    </View>
  );
}

export default ProfileOptions;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',

    alignItems: 'center',
    paddingVertical: spacingY.xxs,
    paddingHorizontal: spacingX.md,
    borderRadius: 20,
  },
  iconStyle: {
    backgroundColor: '#FFF8EE',
    padding: spacingY.md,
    borderRadius: 10,
    marginRight: dynamicSpacingX(5),
  },
});
