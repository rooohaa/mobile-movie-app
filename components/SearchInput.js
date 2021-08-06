import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Keyboard } from 'react-native';
import Colors from '../constants/Colors';

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
            placeholder="Поиск фильмов"
            keyboardAppearance="dark"
            placeholderTextColor="#888"
         />
         <Button title="Поиск" color={Colors.primary} onPress={searchHandler} />
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
      width: '75%',
      padding: 10,
      borderRadius: 7,
      marginRight: 5,
      color: '#888',
      height: 42,
      fontSize: 16,
      backgroundColor: '#333',
   },
});

export { SearchInput };
