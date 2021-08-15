import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Colors from '../constants/Colors';

const AuthInput = ({ value, onChange, placeholder, isPassword, children }) => {
   return (
      <View style={styles.inputWrap}>
         <TextInput
            value={value}
            onChangeText={onChange}
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#888"
            keyboardAppearance="dark"
            secureTextEntry={isPassword}
         />
         {children}
      </View>
   );
};

const styles = StyleSheet.create({
   inputWrap: {
      width: '100%',
      position: 'relative',
      marginBottom: 20,
   },
   input: {
      width: '100%',
      borderRadius: 8,
      backgroundColor: Colors.light,
      padding: 14,
      color: '#333',
      fontWeight: '500',
   },
});

export { AuthInput };
