import {View, Text, FlatList, ActivityIndicator, Image, Linking, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch/useFetch';

const Detail = ({route}) => {
  const {
    error,
    data: mealData,
    loading,
  } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params}`,
  );
  console.log(mealData);

  const mealRenderHandler = ({item}) => (
    <View style={styles.container}>
      <Image
        style={styles.mealImage}
        source={{
          uri: item.strMealThumb,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.strMeal}</Text>
        <Text style={styles.subTitle}>{item.strArea}</Text>
        <View style = {styles.divider}/>
        <Text style={styles.recipe}>{item.strInstructions}</Text>
      </View>
      <TouchableOpacity
      style={styles.youtubeButton}
      onPress = {() => {
        Linking.openURL(item.strYoutube)
      }}
      >
        <Text style = {styles.youtebeLinkText}>Click to learn on Youtube</Text>
        </TouchableOpacity>
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>something went wrong{error}</Text>;
  }
  return (
    <View style={styles.container}>
      <FlatList data={mealData.meals} renderItem={mealRenderHandler} />
    </View>
  );
};

export default Detail;
