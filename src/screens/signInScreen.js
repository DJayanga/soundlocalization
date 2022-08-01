import {Dimensions, Text, Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';



//getting height and width of the device
const {width, height} = Dimensions.get('window');

const SignInScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  // Add your code here for the Button onClick function for 'Sign In'.
  const onSignInPressed = () => {
    alert('Sign In Button is Pressed');
  };

  // Add your code here for the Button onClick function for 'Forgot Password'.
  const onForgotPasswordPressed = () => {
    alert('Forget Password Button is Pressed');
  };


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>

      <Text style={styles.welcomeTitle}>Welcome back!</Text>

        {/* Image in the Sign In Screen! */}
        <Image
        style={styles.loginIcon}
        source={require('../../assests/images/login.png')}
      />

        {/* Sample Custom Input in the Sign In Screen For 'User Name'. */}
        <CustomInput
          placeholder="User Name"
          value={userName}
          setValue={setUserName}
        />

        {/* Sample Custom Input in the Sign In Screen For 'Password'. */}
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        {/* Sample Custom Button in the Sign In Screen For 'Sign In'. */}
        <CustomButton
          buttonType="PRIMARY"
          buttonText="Sign In"
          onPress={onSignInPressed}
        />

        {/* Sample Custom Button in the Sign In Screen For 'Forgot Password'. */}
        <CustomButton
          buttonType="TERTIARY"
          buttonText="Forgot Password?"
          onPress={onForgotPasswordPressed}
        />


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  //Stylese for the main Screen.
  root: {
    alignItems: 'center',
    padding: 20,
  },

  //Stylese for the Welcome Title.
  welcomeTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#051C68',
    marginTop: 40,
    marginBottom: 20,

  },
  //Stylese for the Login Icon.
  loginIcon: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
});

export default SignInScreen;