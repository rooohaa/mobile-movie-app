import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MoviesScreen } from './MoviesScreen';
import { MovieDetailScreen } from './MovieDetailScreen';

const MovieStack = createNativeStackNavigator();

const MovieStackScreen = () => {
   return (
      <MovieStack.Navigator screenOptions={{ headerShown: true }}>
         <MovieStack.Screen name="Home" component={MoviesScreen} />
         <MovieStack.Screen name="Details" component={MovieDetailScreen} />
      </MovieStack.Navigator>
   );
};

export { MovieStackScreen };
