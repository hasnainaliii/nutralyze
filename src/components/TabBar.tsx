import { PlatformPressable, Text } from '@react-navigation/elements';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { dynamicSpacingY, spacingX } from '../constants/Them';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors as COLORS } from '../constants/Them';

function TabBar({ state, descriptors, navigation }: any) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        // const label =
        //   options.tabBarLabel !== undefined
        //     ? options.tabBarLabel
        //     : options.title !== undefined
        //     ? options.title
        //     : route.name;

        // if (route.name === 'Scan') return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let iconName: string = 'home';

        if (route.name === 'Home') iconName = 'home';
        else if (route.name === 'Profile') iconName = 'person';
        else if (route.name === 'Search') iconName = 'search';
        else if (route.name === 'Liked') iconName = 'heart';

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.tabBarItem,
              route.name === 'Scan' && styles.scanTabWrapper, // Apply extra lift to Scan
            ]}
          >
            <Text style={{ color: isFocused ? colors.primary : colors.text }}>
              {route.name === 'Scan' ? (
                <View style={styles.scanButton}>
                  <Ionicons
                    name="scan-sharp"
                    size={dynamicSpacingY(3.5)}
                    color="white"
                  />
                </View>
              ) : (
                <Octicons
                  name={iconName}
                  size={dynamicSpacingY(3)}
                  color={isFocused ? COLORS.primary : 'gray'}
                />
              )}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    marginHorizontal: spacingX.xl,
  },
  tabBarItem: {
    flex: 1,

    alignItems: 'center',
  },
  scanTabWrapper: {
    bottom: 22,
  },
  scanButton: {
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabBar;
