import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Colors from '../constants/Colors';

const tabs = [
   {
      id: 1,
      text: 'Popular',
      endPoint: 'popular',
   },
   {
      id: 2,
      text: 'Playing',
      endPoint: 'now_playing',
   },
   {
      id: 3,
      text: 'Upcoming',
      endPoint: 'upcoming',
   },
   {
      id: 4,
      text: 'Top rated',
      endPoint: 'top_rated',
   },
];

const MovieTabs = ({ activeTab, onTabPress }) => {
   return (
      <View style={styles.tabsWrap}>
         {tabs.map(({ id, text, endPoint }) => (
            <Button
               key={id}
               title={text}
               onPress={() => onTabPress(endPoint)}
               color={activeTab === endPoint ? Colors.primary : '#757575'}
            />
         ))}
      </View>
   );
};

const styles = StyleSheet.create({
   tabsWrap: {
      width: '100%',
      paddingHorizontal: 5,
      marginVertical: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
});

export { MovieTabs };
