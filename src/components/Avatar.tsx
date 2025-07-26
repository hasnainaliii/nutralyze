import { Image, StyleSheet, View } from 'react-native';
import { dynamicSpacingY } from '../constants/Them';

function Avatar() {
  return (
    <View>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
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
