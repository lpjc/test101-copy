import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample({ navigation, onImgSucc }) {
  const [image, setImage] = useState(null);

  useEffect(() => {

    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      navigation.navigate('Home', { myPicture: result.uri });

    }
  };

  const takePicture = () =>
    navigation.navigate('Camera2')
    ;

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around'
    }}
    >

      <Button
        title="Pick an image from camera roll"
        onPress={pickImage}
      />

      <Button
        title="Take a picture with your camera"
        onPress={takePicture}
      />

      {image && <Image
        source={{ uri: image }}
        style={{ width: 200, height: 200 }}
      />}

    </View>
  );
}
