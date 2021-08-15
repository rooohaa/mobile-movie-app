import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MovieStackScreen } from './screens/MovieStackScreen';
import { LoginScreen } from './screens/LoginScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { BookmarksScreen } from './screens/BookmarksScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MyTheme } from './constants/theme';

const Tab = createBottomTabNavigator();

export default function App() {
   return (
      <NavigationContainer theme={MyTheme}>
         <Tab.Navigator
            screenOptions={({ route }) => ({
               tabBarIcon: ({ _, color, size }) => {
                  let iconName;

                  if (route.name === 'Home') {
                     iconName = 'home';
                  } else if (route.name === 'Profile') {
                     iconName = 'person-circle-outline';
                  } else if (route.name === 'Bookmarks') {
                     iconName = 'bookmarks-outline';
                  }

                  return <Ionicons name={iconName} size={23} color={color} />;
               },
            })}
         >
            <Tab.Screen
               name="Home"
               options={{ headerShown: false }}
               component={MovieStackScreen}
            />
            <Tab.Screen
               name="Login"
               options={{ headerShown: false }}
               component={LoginScreen}
            />
            <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
         </Tab.Navigator>
      </NavigationContainer>
   );
}
