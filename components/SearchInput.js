import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Keyboard } from 'react-native';
import Colors from '../constants/Colors';
import { AppButton } from './AppButton';

const SearchInput = ({ onSearch }) => {
   const [searchQuery, setSearchQuery] = useState('');

   const searchHandler = () => {
      onSearch(searchQuery);
      setSearchQuery('');
      Keyboard.dismiss();
   };

   return (
      <View style={styles.searchWrap}>
         <TextInput
            style={styles.input}
            value={searchQuery}
            onChangeText={(value) => setSearchQuery(value)}
            placeholder="Movie name"
            keyboardAppearance="dark"
            placeholderTextColor="#888"
         />
         <AppButton text="Search" onPress={searchHandler} />
      </View>
   );
};

const styles = StyleSheet.create({
   searchWrap: {
      margin: 10,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
   },
   input: {
      width: '74%',
      padding: 10,
      borderRadius: 6,
      marginRight: 10,
      color: '#333',
      height: 37,
      fontSize: 15,
      fontWeight: '500',
      backgroundColor: Colors.light,
   },
});

export { SearchInput };
