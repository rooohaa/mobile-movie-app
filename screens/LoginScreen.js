import React, { useState } from 'react';
import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity,
   TouchableWithoutFeedback,
   Keyboard,
   Image,
   Alert,
} from 'react-native';
import { AuthButton } from '../components/AuthButton';
import { AuthInput } from '../components/AuthInput';
import Colors from '../constants/Colors';

const LoginScreen = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState(false);

   const loginHandler = () => {
      if (!username || !password) {
         Alert.alert('Validation error', 'Input fields are required!', [
            {
               text: 'OK',
               style: 'default',
            },
         ]);
         setError(true);
         return;
      }

      error && setError(false);

      const formData = { username, password };
      console.log(formData);
      resetFields();
   };

   const resetFields = () => {
      setUsername('');
      setPassword('');
   };

   return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
         <View style={styles.wrap}>
            <View>
               <Text style={styles.title}>Welcome Back!</Text>
               <Text style={styles.subtitle}>Login to continue</Text>
            </View>

            <View style={styles.form}>
               <AuthInput
                  value={username}
                  onChange={(value) => setUsername(value)}
                  placeholder="Username"
                  isPassword={false}
               >
                  <Image
                     style={styles.inputIcon}
                     source={require('../assets/user.png')}
                     resizeMode="cover"
                  />
               </AuthInput>
               <AuthInput
                  value={password}
                  onChange={(value) => setPassword(value)}
                  placeholder="Password"
                  isPassword={true}
               >
                  <Image
                     style={styles.inputIcon}
                     source={require('../assets/padlock.png')}
                     resizeMode="cover"
                  />
               </AuthInput>
               {error && (
                  <Text style={styles.error}>
                     Input fields must not be empty.
                  </Text>
               )}
            </View>

            <AuthButton text="Login" onPress={loginHandler} />

            <TouchableOpacity>
               <Text style={styles.create}>Create new account</Text>
            </TouchableOpacity>
         </View>
      </TouchableWithoutFeedback>
   );
};

const styles = StyleSheet.create({
   wrap: {
      flex: 1,
      width: '100%',
      paddingHorizontal: 15,
      alignItems: 'center',
      justifyContent: 'space-around',
   },
   title: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '500',
      marginBottom: 10,
      lineHeight: 24,
      color: '#fff',
   },
   subtitle: {
      textAlign: 'center',
      fontSize: 13,
      lineHeight: 17,
      color: '#fff',
      opacity: 0.8,
   },
   form: {
      width: '100%',
   },
   inputIcon: {
      width: 20,
      height: 20,
      position: 'absolute',
      right: '3%',
      top: '27%',
   },
   create: {
      fontSize: 16,
      lineHeight: 19,
      color: Colors.primary,
      textDecorationLine: 'underline',
   },
   error: {
      fontSize: 13,
      color: Colors.primary,
   },
});

export { LoginScreen };
