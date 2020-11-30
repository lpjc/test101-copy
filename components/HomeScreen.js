import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Dimensions,ImageBackground, TouchableOpacity, Button } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import MapView from 'react-native-maps';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
//import * as Buttons from '../buttons'

import Map from './Map';
import Overlay2 from './Overlay2';

const screen = Dimensions.get('window');
const backgroundImage = { uri: "https://i.imgur.com/N8f6Qrl.png" };
const ASPECT_RATIO = screen.width / screen.height;

export default function HomeScreen({ navigation, route }) {

  useEffect(() => {
    if (route.params) {
      setNewImage(route.params.myPicture)
    }
  });

  const [newImage, setNewImage] = useState(null)

  return (

    
    <View style={styles.screenContainer}>
       <MapView
          style={styles.map} initialRegion={{
            latitude: 55.641267,
            longitude: 12.517784,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          >
        </MapView>
        
        <View style={styles.topContainer} pointerEvents="box-none">
        <TouchableOpacity style={styles.menuButton}
          onPress={() => console.log('hej', newImage, ASPECT_RATIO,)}
        >
          <Text style={styles.paragraph2}> Hej-tester</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} 
          onPress={() => navigation.navigate('Weather')} >
          <Text style={styles.paragraph2}> VÆÆÆR!ET</Text>
        </TouchableOpacity>
        </View>

        <Card style={styles.cardContainer}>
          <Overlay2 newImage={newImage} navigation={navigation} />
        </Card>

    </View>
    
  );
};

const styles = StyleSheet.create({
  screenContainer:{
    justifyContent: 'space-between',
    ...StyleSheet.absoluteFill,
    paddingTop: Constants.statusBarHeight,

  },
  cardContainer: {
    height: screen.height / 8,
    backgroundColor: 'white',
    padding: 10,
    paddingBottom: 5,
    marginBottom: 35,
  },
  map:{
    ...StyleSheet.absoluteFillObject,
  },
  topContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
    marginBottom: 400,
  },
  members: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 10,
  },
  paragraph2: {
    fontSize: 12,
    flex: 2,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'lightseagreen',
  },
  menuButton: {
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "lightseagreen",
    borderWidth: 5,
    padding: 16,
    height: 90,
    width: 90,
    borderRadius:35,
    marginVertical: screen.height / 40,
    margin: screen.width / 20,
  },
});
