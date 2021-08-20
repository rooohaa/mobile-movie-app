import React, { useEffect, useState } from 'react';
import {
   View,
   StyleSheet,
   Text,
   ActivityIndicator,
   ScrollView,
} from 'react-native';
import { CommentItem } from '../components/CommentItem';
import { DetailsInfo } from '../components/DetailsInfo';
import { RecommendationList } from '../components/RecommendationList';
import api from '../constants/ApiValues';
import Colors from '../constants/Colors';

const MovieDetailScreen = ({ route, navigation }) => {
   const [movie, setMovie] = useState({});
   const [loading, setLoading] = useState(false);
   const { id, name } = route.params;

   useEffect(() => {
      navigation.setOptions({ title: name });
      fetchMovieById(id)
         .then((data) => setMovie(data))
         .finally(() => setLoading(false));
   }, []);

   useEffect(() => {
      navigation.setOptions({ title: movie.title });
   }, [movie]);

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
               <DetailsInfo movie={movie} />
               <View style={styles.recomsWrap}>
                  <Text style={styles.recoms}>We also recommend</Text>
                  <RecommendationList
                     movieId={movie.id}
                     onRecomPress={onRecommendationPress}
                  />
               </View>
               <CommentItem
                  author="Rakhatikk"
                  comment="Love this movie! Very inspiring ouuu shit"
               />
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
      paddingHorizontal: 15,
   },
   recoms: {
      marginBottom: 15,
      fontSize: 19,
      fontWeight: '500',
      color: Colors.light,
   },
});

export { MovieDetailScreen };
