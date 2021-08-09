import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import { MovieList } from '../components/MovieList';
import { SearchInput } from '../components/SearchInput';
import { MovieTabs } from '../components/MovieTabs';
import Colors from '../constants/Colors';
import api from '../constants/ApiValues';

const MoviesScreen = () => {
   const [movies, setMovies] = useState([]);
   const [loading, setLoading] = useState(false);
   const [warning, setWarning] = useState('');
   const [activeTab, setActiveTab] = useState('popular');

   useEffect(() => {
      setLoading(true);
      fetchMovies(activeTab)
         .then((data) => setMovies(data.results))
         .then(() => setLoading(false));
   }, []);

   useEffect(() => {
      setLoading(true);
      fetchMovies(activeTab)
         .then((data) => setMovies(data.results))
         .then(() => setLoading(false));
   }, [activeTab]);

   const fetchMovies = async (endpoint) => {
      const res = await fetch(
         `${api.baseUrl}/movie/${endpoint}?api_key=${api.apiKey}&language=en-US`
      );
      return await res.json();
   };

   const searchMovies = async (query) => {
      if (!query) {
         setWarning('Request should not be empty.');
         return;
      }

      warning && setWarning('');
      setLoading(true);

      try {
         const res = await fetch(
            `${api.baseUrl}/search/movie?api_key=${api.apiKey}&language=en-US&query=${query}`
         );
         const resData = await res.json();

         if (!resData.results.length > 0) {
            setWarning('No movies with this title found.');
         }

         setMovies(resData.results);
         setLoading(false);
      } catch (e) {}
   };

   return (
      <View style={styles.moviesWrapper}>
         <SearchInput onSearch={(query) => searchMovies(query)} />
         <MovieTabs
            activeTab={activeTab}
            onTabPress={(value) => setActiveTab(value)}
         />
         {warning ? <Text style={styles.warning}>{warning}</Text> : null}
         {loading ? (
            <ActivityIndicator
               animating={loading}
               size="large"
               style={{
                  marginVertical: 25,
               }}
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
