import { View, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import MyText from '../../components/MyText';
import { colors, spacingY } from '../../constants/Them';

function Liked() {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <MyText color={colors.black}>Favorites</MyText>
      </View>
    </ScreenWrapper>
  );
}

export default Liked;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: spacingY.lg,
  },
});
