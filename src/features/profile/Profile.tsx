/* eslint-disable react-native/no-inline-styles */
import { Image, Pressable, StyleSheet, View } from 'react-native';
import MyText from '../../components/MyText';
import ProfileOptions from '../../components/ProfileOptions';
import ScreenWrapper from '../../components/ScreenWrapper';
import {
  colors,
  dynamicSpacingX,
  dynamicSpacingY,
  spacingX,
  spacingY,
} from '../../constants/Them';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useAuth } from '../../context/Context';
function Profile() {
  const { user, logout } = useAuth();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <MyText size={2} color="black">
          Profile
        </MyText>
        <View style={styles.imageContainer}>
          <View
            style={{
              position: 'absolute',
              top: dynamicSpacingY(16),
              right: dynamicSpacingX(3),
              zIndex: 1,
              padding: spacingX.xxs,
              backgroundColor: colors.secondary,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: colors.white,
            }}
          >
            <FontAwesome6 name="crown" size={10} color={colors.white} />
          </View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            resizeMode="cover"
            style={styles.imageStyle}
          />
          <MyText color="black" size={3}>
            {user?.name}
          </MyText>
        </View>
        <View style={styles.options}>
          <ProfileOptions title={'Edit Profile'} iconName={'person-fill'} />
          <ProfileOptions title={'Settings'} iconName={'gear'} />
          <ProfileOptions title={'Terms & Privacy Policy'} iconName={'log'} />
          <View style={{ marginTop: spacingY.lg, width: '100%' }}>
            <ProfileOptions title={'Creator'} iconName={'star-fill'} />
          </View>
          <Pressable onPress={() => logout()}>
            <ProfileOptions title={'Log Out'} iconName={'profile'} />
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    gap: 5,
    paddingVertical: spacingY.xxl,
  },
  imageStyle: {
    height: dynamicSpacingY(15),
    aspectRatio: 1,
    borderRadius: 100,
  },
  options: {},
});
