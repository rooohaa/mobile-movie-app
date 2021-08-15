import React from 'react';
import { Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import api from '../constants/ApiValues';
import { truncate } from '../utils';

const RecommendationCard = ({ movie, onRecomPress }) => {
   return (
      <TouchableOpacity
         style={styles.wrapper}
         onPress={() => onRecomPress(movie.id)}
      >
         <Image
            style={styles.img}
            source={{
               uri: `${api.posterUrl}/${movie.backdrop_path}`,
            }}
            resizeMode="cover"
         />
         <Text style={styles.title}>{truncate(movie.title, 25)}</Text>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   wrapper: {
      width: '30%',
      height: 150,
   },
   img: {
      width: '100%',
      height: '100%',
      borderRadius: 8,
   },
   title: {
      fontSize: 13,
      lineHeight: 17,
      marginTop: 7,
      color: Colors.light,
   },
});

export { RecommendationCard };
