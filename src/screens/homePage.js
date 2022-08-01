import {Dimensions, Text, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import CustomButton from '../components/customButton';

//getting height and width of the device
const {width, height} = Dimensions.get('window');

const HomePage = () => {

  // Add your code here for the Button onClick function for 'Sign In'.
  const viewLocationPressed = () => {
    alert('View Location Button is Pressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>

        <Text style={styles.welcomeTitle}>Welcome To The Sound Localization App</Text>

        <CustomButton
          buttonType="PRIMARY"
          buttonText="View Location"
          onPress={viewLocationPressed}
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

  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C68',
    marginVertical: 15,
  },

});

export default HomePage;