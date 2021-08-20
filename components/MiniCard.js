import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../constants/Colors';

const MiniCard = ({ text }) => {
   return (
      <View style={styles.cardWrap}>
         <Text style={styles.text}>{text}</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   cardWrap: {
      marginRight: 10,
      marginBottom: 10,
      paddingVertical: 6,
      paddingHorizontal: 11,
      backgroundColor: 'rgba(234, 0, 66, 0.8)',
      borderRadius: 50,
   },
   text: {
      fontSize: 12,
      color: '#fff',
   },
});

export { MiniCard };
