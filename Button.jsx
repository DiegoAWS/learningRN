import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

export default function CustomButton() {
    const [selectedImage, setSelectedImage] = React.useState(null);
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
          }
      
          setSelectedImage({ localUri: pickerResult.uri });
      }
      if (selectedImage !== null) {
        return (
            
          <View style={styles.container}>
                <Button title='close' onPress={() => { setSelectedImage(null) }} />
            <Image
              source={{ uri: selectedImage.localUri }}
              style={styles.thumbnail}
            />
           
          </View>
        );
      }
    return (
        <TouchableOpacity
        onPress={openImagePickerAsync}
        style={{ backgroundColor: 'blue',margin:50,padding:10,borderRadius:20 }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
      </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    thumbnail: {
      width: 300,
      height: 300,
      resizeMode: "contain"
    }
  });