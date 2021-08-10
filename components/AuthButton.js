import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const AuthButton = ({ text, onPress }) => {
   return (
      <TouchableOpacity style={styles.btnWrap} onPress={onPress}>
         <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   btnWrap: {
      width: '100%',
      backgroundColor: Colors.primary,
      paddingVertical: 15,
      alignItems: 'center',
      borderRadius: 8,
   },
   btnText: {
      textTransform: 'uppercase',
      color: '#fff',
      fontSize: 13,
      fontWeight: '500',
   },
});

export { AuthButton };
