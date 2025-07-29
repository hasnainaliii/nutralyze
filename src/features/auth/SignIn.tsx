/* eslint-disable react-native/no-inline-styles */
import { API_URL } from '@env';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRef, useState } from 'react';
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
import { useAuth } from '../../context/Context';
import MyLoading from '../../components/MyLoading';

function SignIn() {
  const { login, ADMIN } = useAuth();

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  async function handleSubmit() {
    const email = emailRef.current.trim();
    const password = passwordRef.current.trim();

    if (email === ADMIN.email && password === ADMIN.password) {
      login('ADMIN TOKEN', { name: 'HASNAIN ADMIN', email: 'HASNAINEMAIL' });
    }
    setError('');
    setLoading(true);
    if (!email || !password) {
      setError('Please fill in all the fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message || 'Something went wrong.');
        return;
      }

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
          {loading ? <MyLoading /> : <MyText color="white">Sign In</MyText>}
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
