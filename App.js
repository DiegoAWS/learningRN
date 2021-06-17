import React from 'react';
import {  Image, StyleSheet, Text, View } from 'react-native';
import CustomButton from './Button'
import logo from './assets/logo.jpg';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={{ width: 305, height: 159 }} /> */}
      <Image source={logo} style={{ width: '100%', height: 159 }} />
      <Text style={{color: '#888', fontSize: 18, marginTop:30}}> 
       Pick a picture
      </Text>
     <CustomButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
