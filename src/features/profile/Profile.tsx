import { Image, StyleSheet, View } from 'react-native';
import MyText from '../../components/MyText';
import ProfileOptions from '../../components/ProfileOptions';
import ScreenWrapper from '../../components/ScreenWrapper';
import { dynamicSpacingY, spacingY } from '../../constants/Them';

function Profile() {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <MyText>Profile</MyText>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            resizeMode="cover"
            style={styles.imageStyle}
          />
          <MyText color="black" size={3}>
            Hasnain Ali
          </MyText>
        </View>
        <View style={styles.options}>
          <ProfileOptions />
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
