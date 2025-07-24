import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors, dynamicSpacingX, spacingX, spacingY } from '../constants/Them';
import { MyButtonProps } from '../constants/Types';
import MyLoading from './MyLoading';

function MyButton({ style, onPress, children, loading }: MyButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {loading ? <MyLoading /> : children}
    </TouchableOpacity>
  );
}

export default MyButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 18,
    borderCurve: 'continuous',
    // height: dynamicSpacingY(5),
    paddingVertical: spacingY.md,
    paddingHorizontal: spacingX.md,
    width: dynamicSpacingX(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
