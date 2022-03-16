import {View, ActivityIndicator, FlatList, Text} from 'react-native';
import React from 'react';
import styles from './Categories.style';
import CategoryCard from '../../componens/CategoryCard';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch/useFetch';

const Categories = ({navigation}) => {
  const {error, data, loading} = useFetch(Config.API_URL_CATEGORIES);

  const goToDetailHandler = e => {
    navigation.navigate('Meals', e);
  };

  const renderCardItem = ({item}) => (
    <CategoryCard
      name={item.strCategory}
      img={item.strCategoryThumb}
      onPress={() => goToDetailHandler(item.strCategory)}
    />
  );

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>someting went wrong: {error}</Text>;
  }
  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCardItem} />
    </View>
  );
};

export default Categories;
