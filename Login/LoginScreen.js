import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, TextInput,TouchableWithoutFeedback, TouchableOpacity, View ,KeyboardAwareView} from 'react-native'
import { useDispatch } from 'react-redux'
import { auth} from './firebase'
import { Login, register } from './Redux/Actions'
import { useSelector } from 'react-redux'
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
 
const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()
   const dispatch = useDispatch()
  const error = useSelector(state => state.error)
  const users = useSelector(state => state.users)
  
  const login = users.filter(obj => obj.isLoggedIn === true)

  const check = !login.length ? false :  Boolean(login.map(obj => (obj.isLoggedIn).toString()))

  console.log("check1 :", check)


  console.log("error", error)

  const handleSignUp = () => {
    dispatch(register(email, password))
    
setEmail("");
setPassword("");
  }

  const handleLogin = async() => {
     dispatch(Login(email, password))
    .then (error === "" ? (check ? navigation.navigate("Inshorts") : navigation.navigate("Login") ) : Alert.alert(`${error}`) )
     
    
  }

  return (
    
      <View style={styles.container}>
      <View style={[styles.inputContainer, {flex:1}]}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={[styles.buttonContainer, {flex:1}]}>
        {/* <TouchableWithoutFeedback */}
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        {/* </TouchableWithoutFeedback> */}
        </TouchableOpacity>
        {/* <TouchableWithoutFeedback */}
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        {/* </TouchableWithoutFeedback> */}
        </TouchableOpacity>
      </View>
      </View>
   
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:190,
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})