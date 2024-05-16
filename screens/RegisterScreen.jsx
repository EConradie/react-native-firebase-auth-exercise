// TODO: Create Register Screen & Register Functionality

import { TextInput, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { handleLogin, handleRegister } from '../services/authService';

const RegisterScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   TODO: Register Function

  const register = () => {
    handleRegister(email, password)
  }

  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Text>Register</Text>

        <TextInput
        style={styles.inputField}
        placeholder="Your Email"
        onChangeText={newText => setEmail(newText)}
        defaultValue={email}
        />

        <TextInput
            style={styles.inputField}
            placeholder="Your Password"
            onChangeText={newText => setPassword(newText)}
            defaultValue={password}
            />

        <TouchableOpacity style={styles.button} onPress={register}>
            <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>

        {/* TODO: Add Register Navigation */}

        <TouchableOpacity style={styles.under} onPress={() => navigation.navigate('Login')}>
            <Text>Already have an account?</Text>
            <Text style={styles.text} >Login</Text>
        </TouchableOpacity>
      

      </View>  
      
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    inputField: {
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 15
    },
    button: {
        backgroundColor: "green",
        textAlign: 'center',
        padding: 10,
        marginTop: 30
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    },
    text: {
        textAlign: 'center',
        color: 'green',
        marginLeft: 5
    },
    under: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10
    }
})