import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const colors = {
  // Primary shades (greenish)
  primary: '#90BE7F', // 0%
  primary20: '#739866', // 20%
  primary40: '#56724C', // 40%
  primary60: '#3A4C33', // 60%
  primary80: '#1D2619', // 80%

  // Secondary shades (salmon)
  secondary: '#FA8072', // 0%
  secondary20: '#C8665B', // 20%
  secondary40: '#964D44', // 40%
  secondary60: '#64332E', // 60%
  secondary80: '#321A17', // 80%

  // Neutrals
  white: '#FFFFFF',
  black: '#000000',
  black_text: '#00000073',
  gray: '#F4F4F4',
};

export const fonts = {
  SIGNIKA_REGULAR: 'Signika-Regular',
  SIGNIKA_LIGHT: 'Signika-Light',
  SIGNIKA_Medium: 'Signika-Medium',
  SIGNIKA_SEMIBOLD: 'Signika-SemiBold',
  SIGNIKA_BOLD: 'Signika-Bold',
};
// 🔠 Font sizes using `hp()` for responsiveness
export const fontSizes = {
  tiny: hp('1.2%'),
  small: hp('1.5%'),
  medium: hp('2%'),
  large: hp('2.5%'),
  xl: hp('3%'),
  xxl: hp('4%'),
};

export const spacingX = {
  xxs: wp('1'),
  xs: wp('2'),
  sm: wp('3'),
  md: wp('4'),
  lg: wp('5'),
  xl: wp('6'),
  xxl: wp('7'),
};

// 🧭 Vertical (Y-axis) spacing
export const spacingY = {
  xxs: hp('0.5'),
  xs: hp('1'),
  sm: hp('1.5'),
  md: hp('2'),
  lg: hp('3'),
  xl: hp('4'),
  xxl: hp('5'),
};

// 📐 Dynamic font size helper
export const dynamicFont = (percent: number) => hp(`${percent}`);

// ↔️ Dynamic horizontal spacing
export const dynamicSpacingX = (percent: number) => wp(`${percent}`);

// ↕️ Dynamic vertical spacing
export const dynamicSpacingY = (percent: number) => hp(`${percent}`);
