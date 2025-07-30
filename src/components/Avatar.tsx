import { Image, StyleSheet, View } from 'react-native';
import { dynamicSpacingY } from '../constants/Them';

function Avatar() {
  return (
    <View>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require('../assets/images/luffy_1.jpeg')}
      />
    </View>
  );
}

export default Avatar;

const styles = StyleSheet.create({
  image: {
    height: dynamicSpacingY(4),
    aspectRatio: 1,
    borderRadius: 15,
  },
});
