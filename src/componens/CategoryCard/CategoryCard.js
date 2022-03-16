import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './CategoryCard.style';

const CategoryCard = ({img, name, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.mealImg}
        source={{
          uri: img,
        }}
      />
      <Text style={styles.categoryText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
