
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as weatherData from './getWeather';

import { API_KEY } from './utils/WeatherAPIKey';
import { weatherInfo } from './utils/WeatherDescriptions';
import {getWeather} from './getWeather';

import weatherDog from '../assets/weatherDog.png';

export default function WeatherScreen({ navigation, route, API_KEY }) {
    
 const [locationData, setState] = useState(0);
 const [testWC, setWC] = useState(null);
 const [json, setJson] = useState(null)

    const state = {
        temperature: 0,
        weatherCondition: testWC,
        location: null,
        icon: null,
        errorMessage: ""
    };

    const getLocationAsync = async () => {

        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            setState({
                errorMessage: 'You do not have permission',
            });
        }
        let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.BestForNavigation });
        const { latitude, longitude } = location.coords
        setState({ location: { latitude, longitude } });
    }

    /*const fetchWeather = (lat, lon) => {
        fetch(
            `http://api.openweathermap.org/data/2.5/forecast?id=524901&`
        )
            .then(res => setJson(res.json()))
            .then(json => {
                setState({
                    temperature: json.main.temp,
                    weatherCondition: json.weather[0].main,
                    icon: json.weather[0].icon,
                });
            });
    };*/
/*
    const componentDidMount = () => {
        getLocationAsync().then(() => {
            getWeather(locationData.latitude, 
                locationData.longitude);
                state.temperature = 100,
                state.weatherCondition = 'lightning'
     
        })
    }; 
*/
const componentDidMount = () => {
    getLocationAsync(), 
    setJson(getWeather(locationData.latitude, locationData.longitude)),
    //setWC(json.weather[0].main) 
    console.log(json);
}; 

    const { temperature, weatherCondition, icon } = state
    return (
        <View style={styles.container}>
            <Button
                title="get weather"
                onPress={componentDidMount}
            />
            <Image style={{ width: 130, height: 130 }} source={{ uri: "https://openweathermap.org/img/w/" + icon + ".png" }} />
            <Text style={styles.title}>PUP Weather Exppert</Text>
            <Text style={styles.paragraph1}>{weatherCondition ? 'Today ' + weatherInfo[weatherCondition].title : 'Waiting for weather conditions'}</Text>
            <Text style={styles.paragraph2}>{weatherCondition ? weatherInfo[weatherCondition].subtitle : ''}</Text>
            <Text>{temperature ? temperature + '°' : ''}</Text>
            <Image style={{ width: 130, height: 130, }} source={weatherDog} />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 26,
        color: "lightseagreen",
    },
    paragraph1: {
        fontSize: 24,
        color: "#fff",
    },
    paragraph2: {
        color: "#fff",
    }
});