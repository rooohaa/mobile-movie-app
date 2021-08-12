import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const AppButton = ({ onPress, text }) => {
   return (
      <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
         <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   btnContainer: {
      backgroundColor: Colors.primary,
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderRadius: 6,
   },
   btnText: {
      fontSize: 14,
      lineHeight: 17,
      color: '#fff',
   },
});

export { AppButton };
