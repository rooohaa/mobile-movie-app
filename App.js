import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { MoviesScreen } from './screens/MoviesScreen';
import { LoginScreen } from './screens/LoginScreen';
import Colors from './constants/Colors';

export default function App() {
   return (
      <View style={styles.container}>
         <MoviesScreen />
         <StatusBar style="light" />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: Colors.bgDarkColor,
      alignItems: 'center',
      paddingTop: 55,
      paddingBottom: 10,
   },
});
