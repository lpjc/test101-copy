import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, Button } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import Overlay2 from './Overlay2';

const image = { uri: "https://i.imgur.com/N8f6Qrl.png" };

export default function HomeScreen({navigation, route}) {
    return (
        <ImageBackground source={image} style={styles.backgroundImage}> 
        
          <View style={styles.topContainer}>
              <TouchableOpacity style={styles.button}>  
                  <Text style={styles.paragraph2 }> Menu test</Text> 
              {/* maybe dropdown OnPress menu here?*/}
              </TouchableOpacity>
          </View>

          <View style={styles.bottomContainer}>
              <Text style={styles.paragraph}>
                  Map not functional - YET!
              </Text>
              <Card>
                  <Overlay2 navigation={navigation}/>
              </Card>
          </View>

      </ImageBackground>
    );
  };

  const styles = StyleSheet.create({
    bottomContainer: {
      flex: 6,
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
  