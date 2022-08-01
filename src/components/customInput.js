import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';

// Functional Component for the Sample Custom Input. To control the functionality outside, use 'Props'.
const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.inputText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // Styles for the Sample Custom Input Container.
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: 'e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },

  // Styles for the Sample Custom Input Text.
  inputText: {
    fontSize: 14,
    flex: 1,
  },

  // Styles for the Sample Custom Input Error Text.
  InputErrorText: {
    fontSize: 12,
    color: 'red',
    marginBottom: -5,
  },
});

export default CustomInput;