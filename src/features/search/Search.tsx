/* eslint-disable react-native/no-inline-styles */
import { useState } from 'react';
import {
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'; // Import StatusBar
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'; // For the trending icon
import HotNowCard from '../../components/HotNowCard';
import MyInput from '../../components/MyInput';
import MyText from '../../components/MyText';
import ScreenWrapper from '../../components/ScreenWrapper';
import {
  colors,
  dynamicSpacingY,
  spacingX,
  spacingY,
} from '../../constants/Them';

const { width: screenWidth } = Dimensions.get('window');

const trendingItems = [
  { id: '1', text: 'best vegetable recipes' },
  { id: '2', text: 'cool season vegetables' },
  { id: '3', text: 'chicken recipes with eggs' },
  // { id: '4', text: 'soups' },
  // { id: '5', text: 'healthy breakfast ideas' },
];

const hotNowItems = [
  {
    id: '1',
    title: 'The Pumpkins Secrets',
    subtitle: 'The Pumpkins Secrets',
    image:
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example pumpkin image
  },
  {
    id: '2',
    title: 'Autumn Harvest',
    subtitle: 'Seasonal Delights',
    image:
      'https://images.unsplash.com/photo-1508615070457-7ba9d31223f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example autumn leaves
  },
  {
    id: '3',
    title: 'Spiced Apple Cider',
    subtitle: 'Warm & Cozy',
    image:
      'https://images.unsplash.com/photo-1574042456453-6a5642d9f379?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example apple cider
  },
  {
    id: '4',
    title: 'Cozy Fireplace',
    subtitle: 'Relaxing Evenings',
    image:
      'https://images.unsplash.com/photo-1533722026442-83b333790518?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example fireplace
  },
  // Add more items as needed
];

function Search() {
  const [search, setSearch] = useState('');

  return (
    <ScreenWrapper>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white || '#FFFFFF'}
      />
      <View style={styles.container}>
        {/* Search Input Section */}
        <View style={styles.inputContainer}>
          <MyInput
            style={styles.searchInput}
            icon={
              <EvilIcons
                size={25}
                color={colors.primary || '#666666'} // Lighter search icon color
                name="search"
              />
            }
            placeholder={` Search recipes, articles, people...`} // Updated placeholder text
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <View>
          {/* Hot Now Section Title */}
          <MyText style={styles.sectionTitle} size={3} color="black">
            Hot Now
          </MyText>

          {/* Horizontal Scrollable List of Hot Now Cards */}
          <FlatList
            data={hotNowItems}
            renderItem={({ item }) => <HotNowCard item={item} />}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.hotNowListContent}
            snapToInterval={screenWidth * 0.4 + (spacingX.sm || 10)}
            decelerationRate="fast"
          />
        </View>
        <View style={styles.trending}>
          {/* Trending Section Title */}
          <MyText style={styles.sectionTitle} size={3} color="black">
            Trending
          </MyText>

          {/* Trending List */}
          <View style={styles.trendingList}>
            {trendingItems.map((item: any) => (
              <View key={item.id} style={styles.trendingItem}>
                <MyText
                  style={styles.trendingText}
                  size={2}
                  color={colors.primary || '#FF5733'}
                >
                  {item.text}
                </MyText>
                <FontAwesome6
                  name="arrow-trend-up" // Using this for the trend icon
                  size={16}
                  color={colors.primary || '#FF5733'}
                />
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make container fill available space
    backgroundColor: colors.white || '#FFFFFF', // Set background for the whole page
    paddingTop: dynamicSpacingY(1), // Add some top padding
  },
  inputContainer: {
    paddingHorizontal: spacingX.md || 20, // Match search input padding
    marginBottom: spacingY.md || 15, // Space below search input
  },
  searchInput: {
    borderRadius: 30,
    width: '100%', // MyInput should take full width of its container
    height: dynamicSpacingY(6), // Custom height for search input
    backgroundColor: colors.gray || '#F2F2F2', // Light gray background
    paddingHorizontal: spacingX.md || 15,
    borderColor: colors.gray,
  },
  trending: {
    flex: 1,
  },
  sectionTitle: {
    fontWeight: 'bold',
    paddingHorizontal: spacingX.md || 20, // Consistent horizontal padding
    marginTop: spacingY.lg || 25, // Space above section title
    marginBottom: dynamicSpacingY(1.5), // Space below section title
  },

  hotNowListContent: {
    paddingHorizontal: spacingX.md || 20, // Consistent horizontal padding for list
    paddingBottom: dynamicSpacingY(2), // Padding below the list
  },
  trendingList: {
    paddingHorizontal: spacingX.md || 20, // Consistent horizontal padding
    marginTop: dynamicSpacingY(1),
  },
  trendingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: dynamicSpacingY(1.5), // Vertical padding for each item
    borderBottomWidth: StyleSheet.hairlineWidth, // Thin separator line
    borderBottomColor: colors.gray || '#E0E0E0', // Light gray separator
  },
  trendingText: {
    // Already defined by MyText size prop, just ensure color if needed
    color: colors.secondary || '#333333', // Dark color for trending text
  },
});
