/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRef, useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
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
import { useAuth } from '../../context/Context';

import { API_URL } from '@env';
import MyLoading from '../../components/MyLoading';
function SignIn() {
  const { login } = useAuth();

  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  async function handleSubmit() {
    const name = nameRef.current.trim();
    const email = emailRef.current.trim();
    const password = passwordRef.current.trim();

    setError('');
    setLoading(true);
    if (!name || !email || !password) {
      setError('Please fill in all the fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || 'Something went wrong.');
        return;
      }

      console.log('User signed up:', data);

      login(data.token, data.user);
      setLoading(false);
    } catch (err) {
      console.log(`${API_URL}/signup`, '2');
      console.log('Signup failed:', err);
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
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
          {error ? (
            <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
              <MyText style={{ color: 'red', fontSize: 14 }}>{error}</MyText>
            </View>
          ) : null}
          <MyButton
            loading={false}
            onPress={handleSubmit}
            style={{ alignSelf: 'center', marginTop: spacingY.lg }}
          >
            {loading ? <MyLoading /> : <MyText color="white">Sign Up</MyText>}
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
