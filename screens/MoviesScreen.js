import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MovieList } from '../components/MovieList';
import api from '../constants/ApiValues';

const MoviesScreen = () => {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      fetchMovies().then((data) => setMovies(data.results));
   }, []);

   const fetchMovies = async () => {
      const res = await fetch(
         `${api.baseUrl}/movie/popular?api_key=${api.apiKey}&language=ru-RU`
      );
      return await res.json();
   };

   return (
      <View style={styles.moviesWrapper}>
         <MovieList movies={movies} />
      </View>
   );
};

const styles = StyleSheet.create({
   moviesWrapper: {
      width: '100%',
   },
});

export { MoviesScreen };
