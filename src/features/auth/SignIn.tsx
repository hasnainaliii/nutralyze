/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MyButton from '../../components/MyButton';
import MyInput from '../../components/MyInput';
import MyText from '../../components/MyText';
import ScreenWrapper from '../../components/ScreenWrapper';
import {
  colors,
  dynamicSpacingX,
  dynamicSpacingY,
  spacingY,
} from '../../constants/Them';
import { StackParamList } from '../../constants/Types';
import { useRef } from 'react';
import { Alert } from 'react-native';

function SignIn() {
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  function handleSubmit() {
    Alert.alert('Email and password', emailRef.current + passwordRef.current);
    emailRef.current = '';
    passwordRef.current = '';
    navigation.navigate('Main');
  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../../assets/images/nutralyze-Logo-only.png')}
          />
          <MyText size={5} color={colors.primary}>
            Neutralyze
          </MyText>
        </View>

        {/* INPUT CONTAINER */}
        <View style={styles.inputContainer}>
          <View>
            <MyText>Email</MyText>
            <MyInput
              onChangeText={(value: string) => (emailRef.current = value)}
              placeholder="Enter your Email"
              keyboardType="email-address"
              icon={<MaterialIcons name="mail" size={20} color="#aaa" />}
              secureTextEntry
            />
          </View>
          <View>
            <MyText>Password</MyText>
            <MyInput
              onChangeText={(value: string) => (passwordRef.current = value)}
              icon={<MaterialIcons name="lock" size={20} color="#aaa" />}
              placeholder="Enter your Password"
              disableKeyboardShortcuts
              secureTextEntry
            />
          </View>

          <Pressable>
            <MyText color={colors.primary}>Forgot Password?</MyText>
          </Pressable>
        </View>
        <MyButton
          loading={false}
          onPress={handleSubmit}
          style={{ alignSelf: 'center', marginTop: spacingY.lg }}
        >
          <MyText color="white">Sign In</MyText>
        </MyButton>
        <View style={styles.footer}>
          <MyText>Don't Have an Account?</MyText>
          <Pressable onPress={() => navigation.navigate('Signup')}>
            <MyText color={colors.primary}> Sign up</MyText>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  logoContainer: {
    paddingTop: spacingY.xl,
  },
  image: {
    height: dynamicSpacingY(20),
    aspectRatio: 1,
  },
  inputContainer: {
    gap: 10,
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: dynamicSpacingX(10),
  },
  forgot: {},
  footer: {
    flexDirection: 'row',
    marginTop: spacingY.md,
  },
});

export default SignIn;
