import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import { MovieList } from '../components/MovieList';
import { SearchInput } from '../components/SearchInput';
import Colors from '../constants/Colors';
import api from '../constants/ApiValues';

const MoviesScreen = () => {
   const [movies, setMovies] = useState([]);
   const [loading, setLoading] = useState(false);
   const [warning, setWarning] = useState('');

   useEffect(() => {
      setLoading(true);
      fetchMovies()
         .then((data) => setMovies(data.results))
         .then(() => setLoading(false));
   }, []);

   const fetchMovies = async () => {
      const res = await fetch(
         `${api.baseUrl}/movie/popular?api_key=${api.apiKey}&language=ru-RU`
      );
      return await res.json();
   };

   const searchMovies = async (query) => {
      if (!query) {
         setWarning('Поле не должно быть пустым');
         return;
      }

      warning && setWarning('');
      setLoading(true);

      try {
         const res = await fetch(
            `${api.baseUrl}/search/movie?api_key=${api.apiKey}&language=ru-RU&query=${query}`
         );
         const resData = await res.json();

         if (!resData.results.length > 0) {
            setWarning('Фильмов с таким названием не найдено.');
         }

         setMovies(resData.results);
         setLoading(false);
      } catch (e) {}
   };

   return (
      <View style={styles.moviesWrapper}>
         <SearchInput onSearch={(query) => searchMovies(query)} />
         {warning ? <Text style={styles.warning}>{warning}</Text> : null}
         {loading ? (
            <ActivityIndicator
               animating={loading}
               size="large"
               color={Colors.primary}
            />
         ) : (
            <MovieList movies={movies} />
         )}
      </View>
   );
};

const styles = StyleSheet.create({
   moviesWrapper: {
      width: '100%',
   },
   warning: {
      fontSize: 14,
      margin: 10,
      color: '#ffc107',
   },
});

export { MoviesScreen };
