import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import api from '../constants/ApiValues';
import Colors from '../constants/Colors';

const MovieDetailScreen = ({ route }) => {
   const [movie, setMovie] = useState({});
   const [loading, setLoading] = useState(false);
   const { id } = route.params;

   useEffect(() => {
      fetchMovieById()
         .then((data) => setMovie(data))
         .finally(() => setLoading(false));
   }, []);

   const fetchMovieById = async () => {
      setLoading(true);

      try {
         const res = await fetch(
            `${api.baseUrl}/movie/${id}?api_key=${api.apiKey}&language=en-US`
         );
         return await res.json();
      } catch (e) {}
   };

   return (
      <View>
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
            <Text>{movie.title}</Text>
         )}
      </View>
   );
};

const styles = StyleSheet.create({});

export { MovieDetailScreen };
