// import {Dimensions, Text, ScrollView, StyleSheet, View} from 'react-native';

// import React, { useEffect, useState } from 'react';
// import Geolocation from '@react-native-community/geolocation';

// //getting height and width of the device

// const {width, height} = Dimensions.get('window');

// const MapScreen = () => {
//   const [pos, setPos] = useState({})

//   useEffect(()=>{
//       Geolocation.getCurrentPosition(
//         position => {
//           setPos({... pos, latitude: position.coords.latitude, longtude: position.coords.longitude})
//           console.log('position', position)
//         },
//         error => {
//           console.log('error', error)
//         },
//         {
//           enableHighAccuracy: true
//         }
//       )
//   },[])


//   return (

//     <ScrollView showsVerticalScrollIndicator={false}>
//       <View style={styles.root}>

      
//       </View>
//     </ScrollView>

//   );

// };

// const styles = StyleSheet.create({

//   //Stylese for the main Screen.

//   root: {
//     alignItems: 'center',
//     padding: 20,
//   },

// });

// export default MapScreen;