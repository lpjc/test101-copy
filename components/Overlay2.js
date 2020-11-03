import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Overlay2() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
       <Image style={styles.logo} source={require('../assets/brownDogForApp02.jpg')} />
      </TouchableOpacity>
      <Text style={styles.paragraph}>
        Maybe a step counter here?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    //flexDirection: 'column',
    alignItems: 'center',
    //justifyContent: 'flex-end',
    flexDirection: 'row-reverse',
    padding: 20,
    height: 90 ,

  },
  paragraph: {
    flex: 1,
    margin: 5,
    marginTop: 0,
    //fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    //flex: 2,
    height: 128,
    width: 128,
    borderRadius: 90
  }

});
