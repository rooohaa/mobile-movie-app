import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const CommentItem = ({ author, comment }) => {
   return (
      <View style={styles.wrap}>
         <Image
            style={styles.avatar}
            source={require('../assets/person.jpeg')}
         />
         <View style={styles.comment}>
            <Text style={styles.author}>{author}</Text>
            <Text style={styles.text}>{comment}</Text>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   wrap: {
      margin: 30,
      flexDirection: 'row',
      alignItems: 'center',
   },
   avatar: {
      width: 38,
      height: 38,
      borderRadius: 50,
   },
   comment: {
      marginLeft: 11,
   },
   author: {
      color: '#fff',
      fontSize: 15,
      fontWeight: '500',
      marginBottom: 5,
   },
   text: {
      fontSize: 13,
      color: '#f1f4f8',
   },
});

export { CommentItem };
