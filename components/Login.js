import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "../Styles";

function LoginScreen({ navigation }) {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ user, setUser ] = useState({})

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
        navigation.navigate('Home', user);
      })
      .catch(error => {
        console.error(error)
      })
  }

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user)

        navigation.navigate('Home', userCredential.user.uid);
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <View>
      <ScrollView>
        <View>
          <Text>Email</Text>
          <TextInput onChangeText={ (text) => setEmail(text) }/>
        </View>
        <View>
          <Text>Password</Text>
          <TextInput onChangeText={ (text) => setPassword(text) } secureTextEntry={ true }/>
        </View>
        <TouchableOpacity style={ styles.btnPrimary } onPress={ handleSignIn }>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ handleCreateAccount } style={ styles.btnPrimary }>
          <Text>Create account</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default LoginScreen