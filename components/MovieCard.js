import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import api from '../constants/ApiValues';
import { truncate } from '../utils';

const MovieCard = ({ movieItem }) => {
   console.log(movieItem);
   return (
      <View style={styles.cardWrap}>
         <View style={styles.imgWrap}>
            <Image
               style={styles.poster}
               source={{ uri: `${api.posterUrl}/${movieItem.backdrop_path}` }}
               resizeMode="cover"
            />
         </View>
         <View style={styles.details}>
            <View style={styles.textWrap}>
               <Text style={styles.title}>{movieItem.title}</Text>
            </View>
            <View style={styles.rating}>
               <Text style={styles.ratingVote}>{movieItem.vote_average}</Text>
               <Image
                  style={styles.ratingIcon}
                  source={require('../assets/star.png')}
               />
               <Text style={styles.year}>{movieItem.release_date}</Text>
            </View>
            <View style={styles.textWrap}>
               <Text style={styles.overview}>
                  {truncate(movieItem.overview, 150)}
               </Text>
            </View>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   cardWrap: {
      marginVertical: 15,
      paddingHorizontal: 15,
      width: '100%',
      height: 180,
      flexDirection: 'row',
      alignItems: 'flex-start',
   },
   imgWrap: {
      height: '100%',
      width: '40%',
      borderRadius: 8,
      marginRight: 15,
   },
   poster: {
      width: '100%',
      height: '100%',
      borderRadius: 8,
   },
   details: {
      width: '60%',
      height: '100%',
   },
   textWrap: {
      flexDirection: 'row',
      marginBottom: 10,
   },
   title: {
      color: '#fff',
      fontSize: 16,
      lineHeight: 19,
      flex: 1,
      flexWrap: 'wrap',
   },
   overview: {
      fontSize: 12,
      lineHeight: 16,
      flex: 1,
      flexWrap: 'wrap',
      color: '#888',
   },
   rating: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
   },
   ratingIcon: {
      width: 11,
      height: 11,
   },
   ratingVote: {
      marginRight: 8,
      color: '#ffc107',
   },
   year: {
      marginLeft: 8,
      color: '#888',
   },
});

export { MovieCard };
