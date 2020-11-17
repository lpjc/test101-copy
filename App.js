import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import CameraScreen from './components/CameraScreen';
import HomeScreen from './components/HomeScreen';
import ImagePickerExample from './components/ImagePicker';

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
        />
        <Stack.Screen name="Camera" component={ImagePickerExample}
        />
        <Stack.Screen name="Camera2" component={CameraScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
