import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import Colors from '../constants/Colors';
import api from '../constants/ApiValues';
import { MiniCard } from './MiniCard';

const DetailsInfo = ({ movie }) => {
   return (
      <View style={styles.detailsWrap}>
         <View style={styles.posterWrap}>
            <Image
               style={styles.poster}
               source={{
                  uri: `${api.posterUrl}/${movie?.backdrop_path}`,
               }}
               resizeMode="cover"
            />
         </View>
         <View style={styles.info}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.sub}>Release date: {movie?.release_date}</Text>
            <Text style={styles.sub}>Average vote: {movie?.vote_average}</Text>
            <Text style={styles.sub}>Status: {movie?.status}</Text>
            {movie.genres && (
               <View style={styles.genres}>
                  {movie.genres.map(({ id, name }) => (
                     <MiniCard key={id} text={name} />
                  ))}
               </View>
            )}
            <Text style={styles.descr}>Description</Text>
            <Text style={styles.descrText}>{movie?.overview}</Text>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   detailsWrap: {
      alignItems: 'center',
   },
   posterWrap: {
      width: '100%',
      paddingHorizontal: 60,
      paddingVertical: 30,
      borderRadius: 10,
      ...Platform.select({
         ios: {
            shadowColor: 'rgba(0,0,0, .6)',
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 1,
            shadowRadius: 3,
         },
         android: {
            elevation: 5,
         },
      }),
   },
   poster: {
      width: '100%',
      height: 370,
      borderRadius: 10,
   },
   info: {
      paddingHorizontal: 15,
      width: '100%',
      marginBottom: 25,
      alignItems: 'flex-start',
   },
   title: {
      fontSize: 23,
      fontWeight: '500',
      marginBottom: 10,
      color: '#fff',
   },
   sub: {
      fontSize: 15,
      color: Colors.light,
      marginBottom: 10,
   },
   genres: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
   },
   descr: {
      fontSize: 16,
      fontWeight: '500',
      marginVertical: 7,
      color: '#fff',
   },
   descrText: {
      fontSize: 13,
      lineHeight: 17,
      color: '#999',
   },
});

export { DetailsInfo };
