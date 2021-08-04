import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MoviesScreen } from './screens/MoviesScreen';
import Colors from './constants/Colors';

export default function App() {
   return (
      <View style={styles.container}>
         <MoviesScreen />
         <StatusBar style="dark" />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: Colors.bgDarkColor,
      alignItems: 'center',
      paddingVertical: 60,
   },
});
