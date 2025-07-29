import { TextStyle, ViewStyle } from 'react-native';
import { TextProps } from 'react-native-svg';

export type StackParamList = {
  SignIn: undefined;
  Signup: undefined;
  GetStarted: undefined;
  Main: undefined; // another with multiple params
};

export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Scan: undefined;
  Liked: undefined;
  Profile: undefined; // another with multiple params
};

export type MyButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  loading: boolean;
};

export type MyTextProps = {
  size?: number;
  color?: string;
  fontFamily?: TextStyle['fontFamily'];
  children: any | null;
  style?: TextStyle | TextStyle[];
  textProps?: TextProps;
};

export type User = {
  name: string;
  email: string;
};

export type AuthContextType = {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (token: string, user: User) => Promise<void>;
  logout: () => Promise<void>;
  ADMIN: any;
};
