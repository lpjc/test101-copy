import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, Button } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import Overlay2 from './Overlay2';

const backgroundImage = { uri: "https://i.imgur.com/N8f6Qrl.png" };

export default function HomeScreen({ navigation, route }) {

  useEffect(() => {
    if (route.params) {
      setNewImage(route.params.myPicture)
    }
  });

  const [newImage, setNewImage] = useState(null)

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.button}
          onPress={() => console.log('hej', newImage)}
        >
          <Text style={styles.paragraph2}> Hej-tester</Text>
        </TouchableOpacity>


      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.paragraph}>
          Map NO
              </Text>
        <Card>
          <Overlay2 newImage={newImage} navigation={navigation} />
        </Card>
      </View>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 4,
    justifyContent: 'flex-end',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 0,
    padding: 16,
    paddingBottom: 25,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight + 16,
    backgroundColor: 0,
    padding: 16,
    paddingBottom: 25,

  },
  paragraph: {
    flex: 2,
    //margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
  paragraph2: {
    fontSize: 12,
    flex: 2,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'lightseagreen',
  },

  cardStyle: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  button: {
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "lightseagreen",
    borderWidth: 5,
    padding: 16,
    height: 90,
    width: 90,
    borderRadius: 90
  },
});
