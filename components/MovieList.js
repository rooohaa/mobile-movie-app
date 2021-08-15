import React from 'react';
import { FlatList } from 'react-native';
import { MovieCard } from './MovieCard';

const MovieList = ({ movies, onCardPress }) => {
   return (
      <FlatList
         data={movies}
         renderItem={({ item }) => (
            <MovieCard movieItem={item} onPress={onCardPress} />
         )}
         keyExtractor={(item) => item.id.toString()}
      />
   );
};

export { MovieList };
