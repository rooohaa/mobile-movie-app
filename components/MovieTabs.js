import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TabItem } from '../components/TabItem';

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
            <TabItem
               key={id}
               text={text}
               isActive={activeTab === endPoint}
               onPress={() => onTabPress(endPoint)}
            />
         ))}
      </View>
   );
};

const styles = StyleSheet.create({
   tabsWrap: {
      width: '100%',
      paddingHorizontal: 12,
      marginTop: 5,
      marginBottom: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
});

export { MovieTabs };
