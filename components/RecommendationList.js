import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import api from '../constants/ApiValues';
import Colors from '../constants/Colors';
import { getNRandomElems } from '../utils';
import { RecommendationCard } from './RecommendationCard';

const RecommendationList = ({ movieId, onRecomPress }) => {
   const [recommendations, setRecommendations] = useState([]);

   useEffect(() => {
      fetchRecommendations()
         .then((data) => {
            const recoms = getNRandomElems(data?.results, 3);
            setRecommendations(recoms);
         })
         .catch((err) => {});
   }, []);

   const fetchRecommendations = async () => {
      try {
         const res = await fetch(
            `${api.baseUrl}/movie/${movieId}/recommendations?api_key=${api.apiKey}&language=en-US&page=1`
         );
         return await res.json();
      } catch (e) {}
   };

   return (
      <View style={styles.wrapper}>
         {recommendations.map((item) => (
            <RecommendationCard
               key={item.id.toString()}
               movie={item}
               onRecomPress={onRecomPress}
            />
         ))}
      </View>
   );
};

const styles = StyleSheet.create({
   wrapper: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
   },
});

export { RecommendationList };
