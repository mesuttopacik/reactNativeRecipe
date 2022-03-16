import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './Meals.style';
import MealsCard from '../../componens/MealsCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';

const Meals = ({navigation, route}) => {
  const {
    error,
    data: mealData,
    loading,
  } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params}`,
  );
  // const {error, data:mealData, loading} = useFetch(Config.API_URL_MEALS_FILTER_BY_CATEGORY + route.params)
  console.log(Config.API_URL_MEALS_FILTER_BY_CATEGORY + route.params);
  // console.log(mealData);

  const selectedMaelHandler = e => {
    navigation.navigate('Detail', e.idMeal);
  };
  const mealsRenderItem = ({item}) => (
    <MealsCard
      onPress={() => selectedMaelHandler(item)}
      img={item.strMealThumb}
      name={item.strMeal}
    />
  );

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>something went wrong{error}</Text>;
  }
  return (
    <View style={styles.container}>
      <FlatList data={mealData.meals} renderItem={mealsRenderItem} />
    </View>
  );
};

export default Meals;
