import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, View } from 'react-native';
import MyButton from '../../components/MyButton';
import MyText from '../../components/MyText';
import ScreenWrapper from '../../components/ScreenWrapper';
import SlidingComponent from '../../components/SlidingComponent';
import { colors, dynamicSpacingY, spacingY } from '../../constants/Them';
import { StackParamList } from '../../constants/Types';
import { useAuth } from '../../context/Context';

function GetStarted() {
  const { user, token } = useAuth();
  console.log(user, token);
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <MyText size={5} color={colors.primary} style={styles.text}>
          Nutralyze
        </MyText>
        <SlidingComponent />
        <View style={styles.GetStarted}>
          <MyButton
            loading={false}
            onPress={() => navigation.navigate('Signup')}
          >
            <MyText>Get Started</MyText>
          </MyButton>
        </View>

        <View style={styles.footer}>
          <MyText size={2}> Already Have an account ?</MyText>
          <Pressable onPress={() => navigation.navigate('SignIn')}>
            <MyText color={colors.primary}> SignIn</MyText>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
  GetStarted: {
    alignItems: 'center',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: spacingY.lg,
    paddingBottom: dynamicSpacingY(5),
    // backgroundColor: 'red',
  },
});

export default GetStarted;
