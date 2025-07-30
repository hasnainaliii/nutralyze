/* eslint-disable react-native/no-inline-styles */
import { useState } from 'react';
import { PIXABAY_KEY } from '@env';

import {
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
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
];

const hotNowItems = [
  {
    id: '1',
    title: 'The Pumpkins Secrets',
    subtitle: 'The Pumpkins Secrets',
    image: require('../../assets/images/pumpkin-6706772_1920.jpg'),
  },
  {
    id: '2',
    title: 'Autumn Harvest',
    subtitle: 'Seasonal Delights',
    image: require('../../assets/images/field-8172968_1920.jpg'),
  },
  {
    id: '3',
    title: 'Spiced Apple Cider',
    subtitle: 'Warm & Cozy',
    image: require('../../assets/images/apples-6604179_1920.jpg'),
  },
  {
    id: '4',
    title: 'Cozy Fireplace',
    subtitle: 'Relaxing Evenings',
    image: require('../../assets/images/snowy-cabin-9477457_1920.jpg'),
  },
];

function Search() {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  async function fetchPixabayImages(foodName: string) {
    const query = `cartoon ${foodName}`;
    const apiKey = PIXABAY_KEY;

    const res = await fetch(
      `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
        query,
      )}&image_type=illustration&category=food&safesearch=true`,
    );

    const data = await res.json();
    return data?.hits || [];
  }

  const handleSearch = async () => {
    if (!search.trim()) return;
    setLoading(true);
    const results = await fetchPixabayImages(search);
    setImages(results);
    setLoading(false);
    setSearched(true);
  };

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
            onSubmitEditing={handleSearch}
            icon={
              <EvilIcons
                size={25}
                color={colors.primary || '#666666'}
                name="search"
              />
            }
            placeholder={` Search recipes, articles, people...`}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* Show images only after search */}
        {searched ? (
          loading ? (
            <ActivityIndicator size="large" color={colors.primary} />
          ) : (
            <FlatList
              data={images}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.imageItem}>
                  <Image
                    source={{ uri: item.webformatURL }}
                    style={styles.image}
                  />
                  <MyText size={2} color="black">
                    {item.tags.split(',')[0]}
                  </MyText>
                </View>
              )}
              // numColumns={3}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.imageGrid}
            />
          )
        ) : (
          <>
            {/* Hot Now Section */}
            <View>
              <MyText style={styles.sectionTitle} size={3} color="black">
                Hot Now
              </MyText>
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

            {/* Trending Section */}
            <View style={styles.trending}>
              <MyText style={styles.sectionTitle} size={3} color="black">
                Trending
              </MyText>
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
                      name="arrow-trend-up"
                      size={16}
                      color={colors.primary || '#FF5733'}
                    />
                  </View>
                ))}
              </View>
            </View>
          </>
        )}
      </View>
    </ScreenWrapper>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white || '#FFFFFF',
    paddingTop: dynamicSpacingY(1),
  },
  inputContainer: {
    paddingHorizontal: spacingX.md || 20,
    marginBottom: spacingY.md || 15,
  },
  searchInput: {
    borderRadius: 30,
    width: '100%',
    height: dynamicSpacingY(6),
    backgroundColor: colors.gray || '#F2F2F2',
    paddingHorizontal: spacingX.md || 15,
    borderColor: colors.gray,
  },
  trending: {
    flex: 1,
  },
  sectionTitle: {
    fontWeight: 'bold',
    paddingHorizontal: spacingX.md || 20,
    marginTop: spacingY.lg || 25,
    marginBottom: dynamicSpacingY(1.5),
  },
  hotNowListContent: {
    paddingHorizontal: spacingX.md || 20,
    paddingBottom: dynamicSpacingY(2),
  },
  trendingList: {
    paddingHorizontal: spacingX.md || 20,
    marginTop: dynamicSpacingY(1),
  },
  trendingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: dynamicSpacingY(1.5),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.gray || '#E0E0E0',
  },
  trendingText: {
    color: colors.secondary || '#333333',
  },
  imageGrid: {
    paddingHorizontal: spacingX.md,
    paddingTop: 10,
    paddingBottom: 20,
  },

  imageItem: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    resizeMode: 'cover',
  },
});
