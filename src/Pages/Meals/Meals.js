import { View, Text, Button } from 'react-native'
import React from 'react'
import styles from './Meals.style'
import MealsCard from '../../componens/MealsCard'

const Meals = ({navigation, route}) => {
  const navigateHandler = () => {
navigation.navigate('Detail')
  }
  return (
    <View style={styles.container}>
      <MealsCard />
      <Text>{route.params}</Text>
      <Button title="go to detail" onPress={navigateHandler} />
    </View>
  )
}

export default Meals