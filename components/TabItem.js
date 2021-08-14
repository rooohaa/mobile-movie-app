import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const TabItem = ({ text, onPress, isActive }) => {
   const activeColor = isActive ? Colors.primary : '#fff';

   return (
      <TouchableOpacity onPress={onPress}>
         <View
            style={{
               ...styles.tabWrap,
               borderColor: activeColor,
            }}
         >
            <Text
               style={{
                  ...styles.tabText,
                  color: activeColor,
                  fontWeight: isActive ? '500' : '400',
               }}
            >
               {text}
            </Text>
         </View>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   tabWrap: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 15,
   },
   tabText: {
      color: '#fff',
      fontSize: 13,
      lineHeight: 17,
   },
});

export { TabItem };
