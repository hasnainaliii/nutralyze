import { Text } from 'react-native';
import { colors, dynamicFont, fonts, fontSizes } from '../constants/Them';
import { MyTextProps } from '../constants/Types';

function MyText({
  size,
  color = colors.black_text,
  fontFamily = fonts.SIGNIKA_REGULAR,
  children,
  style,
  textProps = {},
}: MyTextProps) {
  const textStyle = {
    fontSize: size ? dynamicFont(size) : fontSizes.medium,
    color,
    fontFamily,
  };
  return (
    <Text style={[textStyle, style]} {...textProps}>
      {children}
    </Text>
  );
}

export default MyText;
