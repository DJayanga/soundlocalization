import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import HomePage from './src/screens/homePage';
import MapScreen from './src/screens/mapScreen';
import SignInScreen from './src/screens/signInScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      {/* <HomePage /> */}
      <SignInScreen/>
      {/* <MapScreen/> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default App;