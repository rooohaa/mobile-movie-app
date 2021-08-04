import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MovieCard } from './MovieCard';

const MovieList = ({ movies }) => {
   return (
      <FlatList
         data={movies}
         renderItem={({ item }) => <MovieCard movieItem={item} />}
         keyExtractor={(item) => item.id.toString()}
      />
   );
};

export { MovieList };