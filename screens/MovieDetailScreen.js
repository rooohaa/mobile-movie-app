import React, { useEffect, useState } from 'react';
import {
   View,
   StyleSheet,
   Text,
   ActivityIndicator,
   ScrollView,
} from 'react-native';
import { RecommendationList } from '../components/RecommendationList';
import api from '../constants/ApiValues';
import Colors from '../constants/Colors';

const MovieDetailScreen = ({ route }) => {
   const [movie, setMovie] = useState({});
   const [loading, setLoading] = useState(false);
   const { id } = route.params;

   useEffect(() => {
      fetchMovieById(id)
         .then((data) => setMovie(data))
         .finally(() => setLoading(false));
   }, []);

   const fetchMovieById = async (id) => {
      setLoading(true);

      try {
         const res = await fetch(
            `${api.baseUrl}/movie/${id}?api_key=${api.apiKey}&language=en-US`
         );
         return await res.json();
      } catch (e) {}
   };

   const onRecommendationPress = (movieId) => {
      setLoading(true);
      fetchMovieById(movieId)
         .then((data) => setMovie(data))
         .finally(() => setLoading(false));
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
            <ScrollView style={styles.container}>
               <View style={styles.recomsWrap}>
                  <Text style={styles.recoms}>We also recommend</Text>
                  <RecommendationList
                     movieId={movie.id}
                     onRecomPress={onRecommendationPress}
                  />
               </View>
               <Text>{movie.title}</Text>
               <Text>{movie.title}</Text>
            </ScrollView>
         )}
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      height: '100%',
   },
   recomsWrap: {
      height: 250,
      borderTopWidth: 0.5,
      borderBottomWidth: 0.5,
      borderColor: '#333',
      paddingVertical: 15,
      paddingHorizontal: 10,
   },
   recoms: {
      marginBottom: 15,
      fontSize: 19,
      fontWeight: '500',
      color: Colors.light,
   },
});

export { MovieDetailScreen };
