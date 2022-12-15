import * as React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";

function HomeScreen() {
  return (
    <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
      <Text>Home Screen</Text>
    </View>
  );
}

function LoginScreen() {
  const [ email, setEmail ] = React.useState('')
  const [ password, setPassword ] = React.useState('')
  const navigation = useNavigation()

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Account created')
        const user = userCredential.user;
        console.log(user)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User logged')
        const user = userCredential.user;
        console.log(user)
        navigation.navigate('Home');
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
      <ScrollView>
        <View>
          <Text>Email</Text>
          <TextInput onChangeText={ (text) => setEmail(text) }/>
        </View>
        <View>
          <Text>Password</Text>
          <TextInput onChangeText={ (text) => setPassword(text) } secureTextEntry={ true }/>
        </View>
        <TouchableOpacity onPress={ handleSignIn }>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ handleCreateAccount }>
          <Text>Create account</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={ LoginScreen }/>
        <Stack.Screen name="Home" component={ HomeScreen }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;