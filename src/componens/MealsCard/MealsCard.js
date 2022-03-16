import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './MealsCard.style';

const MealsCard = ({name, img, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.Container}>
      <ImageBackground
        style={styles.mealImg}
        source={{
          uri: img,
        }}>
        <Text style={styles.imgText}>{name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MealsCard;
