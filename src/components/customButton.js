import {Pressable, StyleSheet, Text} from 'react-native';

import React from 'react';

// Functional Component for the Sample Custom Button. To control the functionality outside, use 'Props'.

//Here are two types of Buttons. PRIMARY Button style is the normal button structure which has background color and text color.

//Here are two types of Buttons. TERTIARY Button style is the special button structure which doesn't has background color. So the text color should be able to visile easily.

const CustomButton = ({

  buttonType,

  buttonText,

  onPress,

  bgColor,

  textColor,

}) => {

  return (

    <Pressable

      onPress={onPress}

      style={[

        styles.container,

        styles[`container_${buttonType}`],

        bgColor ? {backgroundColor: bgColor} : {},

      ]}>

      <Text

        style={[

          styles.text,

          styles[`text_${buttonType}`],

          textColor ? {color: textColor} : {},

        ]}>

        {buttonText}

      </Text>

    </Pressable>

  );

};

const styles = StyleSheet.create({

  // Styles for the Sample Custom Input Container.

  container: {

    width: '100%',

    padding: 15,

    marginVertical: 5,

    alignItems: 'center',

    borderRadius: 5,

  },

  //PRIMARY means the normal button structure which has a background color.

  container_PRIMARY: {

    backgroundColor: 'blue',

  },

  //TERTIARY means the Special button structure which doesn't have a background color.

  container_TERTIARY: {},

  // Styles for the Sample Custom Input Text.

  text: {

    fontWeight: 'bold',

  },

  //PRIMARY means the normal button text structure which has a background color.

  text_PRIMARY: {

    color: 'white',

  },

  //TERTIARY means the Special button structure which doesn't have a background color. So their text color must be able to see without a background color.

  text_TERTIARY: {

    color: 'grey',

  },

});

export default CustomButton;