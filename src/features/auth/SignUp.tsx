/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRef } from 'react';
import { Alert, Image, Pressable, StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
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

function SignIn() {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  function handleSubmit() {
    Alert.alert('Email and password', emailRef.current + passwordRef.current);
    emailRef.current = '';
    passwordRef.current = '';
  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Animated.View style={styles.logoContainer}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../../assets/images/nutralyze-Logo-only.png')}
          />
          <MyText size={5} color={colors.primary}>
            Neutralyze
          </MyText>
        </Animated.View>

        {/* INPUT CONTAINER */}
        <View style={styles.inputContainer}>
          <View>
            <MyText>Full Name</MyText>
            <MyInput
              onChangeText={(value: string) => (nameRef.current = value)}
              placeholder="Hasnain Ali 🕊️"
              keyboardType="default"
              icon={<MaterialIcons name="mail" size={20} color="#aaa" />}
              secureTextEntry
            />
          </View>
          <View>
            <MyText>Email</MyText>
            <MyInput
              onChangeText={(value: string) => (emailRef.current = value)}
              placeholder="Hasnain@hasnain.com"
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
              placeholder="********"
              disableKeyboardShortcuts
              secureTextEntry
            />
          </View>

          <Pressable>
            <MyText color={colors.primary}>Forgot Password?</MyText>
          </Pressable>
        </View>

        <View style={styles.footer}>
          <MyButton
            loading={false}
            onPress={handleSubmit}
            style={{ alignSelf: 'center', marginTop: spacingY.lg }}
          >
            <MyText color="white">Sign Up</MyText>
          </MyButton>
          <View style={styles.sign}>
            <MyText>Already Have an Account?</MyText>
            <Pressable onPress={() => navigation.navigate('SignIn')}>
              <MyText color={colors.primary}> Sign in</MyText>
            </Pressable>
          </View>
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
  sign: {
    flexDirection: 'row',
    marginTop: spacingY.md,
  },
  footer: {
    flex: 1,
  },
});

export default SignIn;
