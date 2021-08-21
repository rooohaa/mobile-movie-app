import React from 'react';
import {
   FlatList,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
} from 'react-native';
import { CommentItem } from './CommentItem';
import Colors from '../constants/Colors';

const Comments = ({ comments, isAllShown, onToggle }) => {
   return (
      <View style={styles.commentsWrap}>
         <Text style={styles.text}>Comments</Text>
         <FlatList
            data={comments}
            renderItem={({ item }) => (
               <CommentItem author={item.author} comment={item.comment} />
            )}
            keyExtractor={(item) => item.id.toString()}
         />
         <TouchableOpacity style={styles.showAll} onPress={onToggle}>
            <Text style={styles.showText}>
               {isAllShown ? 'Cut down' : 'Show all'}
            </Text>
         </TouchableOpacity>
      </View>
   );
};

const styles = StyleSheet.create({
   commentsWrap: {
      paddingHorizontal: 15,
      paddingVertical: 12,
   },
   text: {
      marginBottom: 17,
      color: '#fff',
      fontSize: 19,
      fontWeight: '500',
      color: Colors.light,
   },
   showAll: {
      width: '100%',
      alignItems: 'center',
      marginBottom: 10,
   },
   showText: {
      fontSize: 16,
      color: Colors.primary,
   },
});

export { Comments };
