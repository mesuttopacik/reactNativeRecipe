import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NAVIGATION_HEADER_OPTION} from '../globals/Styles';

import Categories from './Pages/Categories';
import Meals from './Pages/Meals';
import Detail from './Pages/Detail';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={NAVIGATION_HEADER_OPTION}
        />
        <Stack.Screen
          name="Meals"
          component={Meals}
          options={NAVIGATION_HEADER_OPTION}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={NAVIGATION_HEADER_OPTION}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
