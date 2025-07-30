/* eslint-disable react-native/no-inline-styles */
import { Image, Pressable, StyleSheet, View } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
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
            source={require('../../assets/images/luffy_1.jpeg')}
            resizeMode="cover"
            style={styles.imageStyle}
          />
        </View>
        <MyText color="black" size={3}>
          {user?.name}
        </MyText>
        <MyText
          color={colors.black_text}
          style={{ paddingBottom: spacingY.lg }}
          size={1.5}
        >
          {user?.email}
        </MyText>
        <View style={styles.options}>
          <ProfileOptions title={'Edit Profile'} iconName={'person-fill'} />
          <ProfileOptions title={'Settings'} iconName={'gear'} />
          <ProfileOptions title={'Terms & Privacy Policy'} iconName={'log'} />
          <View style={{ marginTop: spacingY.lg, width: '100%' }}>
            <ProfileOptions title={'Creator'} iconName={'star-fill'} />
          </View>
          <Pressable style={{ width: '100%' }} onPress={() => logout()}>
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
    paddingVertical: spacingY.md,
  },
  imageStyle: {
    height: dynamicSpacingY(15),
    aspectRatio: 1,
    borderRadius: 100,
  },
  options: {},
});
