import { StyleSheet, Text, View, ActivityIndicator, ImageBackground,Alert,Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import { ScrollView,RefreshControl, FlatList } from 'react-native-gesture-handler'

import * as Location from 'expo-location'
import { SafeAreaView } from 'react-native-safe-area-context'

const openWeatherKey='f4b5b246d2040b745a9c2eabbc1da526'
let url=`https://api.openweathermap.org/data/2.5/weather?`

const Main = () => {
    const [forecast,setForecast]=useState(null)
    const [refreshing,setRefreshing]=useState(false)
    const loadForecast=async()=>{
        setRefreshing(true)

        //ask permission to access location
        let {status}=await Location.requestForegroundPermissionsAsync()
        if(status!=='granted'){
            Alert.alert('Permission to access location denied')
        }
        //get current location
        let location=await Location.getCurrentPositionAsync({enableHighAccuracy:true})
        //fetch weather data from openweathermap api
        const response=await fetch(url+`${url}&lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${openWeatherKey}`)
        //convert response to &exclude=hourly,
        const data=await response.json()
        if(!response.ok){
            Alert.alert(`Error`,`something went wrong`)
        }else{
            setForecast(data)
        }
        setRefreshing(false)
    }
    //useEffect(hook that runs after a component is rendered)
    useEffect(()=>{
        loadForecast()
    },[])
    //if forecast is not loaded show a loading indicator
    if (!forecast) {
        return (
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size='large' color='black' />
                <Text style={{fontSize:20,fontWeight:'bold'}}>Loading....</Text>
            </SafeAreaView>
        );
    }

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <ImageBackground
        source={require('../assets/main.jpg')}
        style={{flex:1,width:'100%',height:'100%'}}
        blurRadius={20}
      >
        <ScrollView refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={()=>loadForecast()}/>
        }>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:30,fontWeight:'bold',}}>Current Weather in:</Text>
                <Text style={{fontSize:20,fontStyle:'italic',fontWeight:'bold'}}>{forecast.name}</Text>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                {forecast.weather && forecast.weather.length > 0 && (
                    <Image
                        source={{ uri: `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@4x.png` }}
                        style={{ width: 150, height: 80 }}
                    />
                )}
                    <Text style={{fontSize:20,fontWeight:'bold'}}>{parseFloat(forecast.main.temp - 273.15).toFixed(2)}°C</Text>
                </View>
                {forecast.weather && forecast.weather.length > 0 && (
                    <Text style={{fontSize:21}}>{forecast.weather[0].description}</Text>
                )}
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={styles.gen}>
                    {forecast.main && (
                        <Text style={{fontSize:17,fontWeight:'bold'}}>Body Feel: {parseFloat(forecast.main.feels_like - 273.15).toFixed(2)}°C</Text>
                    )}
                    </View>
                    <View style={styles.gen}>
                    {forecast.main && (
                        <Text style={{fontSize:17,fontWeight:'bold'}}>Humidity: {forecast.main.humidity}%</Text>
                    )}
                    </View>
                    <View style={styles.gen}>
                    {forecast.main && (
                        <Text style={{fontSize:17,fontWeight:'bold'}}>Pressure: {forecast.main.pressure} hPa</Text>
                    )}
                    </View>
                </View>
                <View>
                    <Text style={{fontSize:27,fontWeight:'bold'}}>Hourly Forecast:</Text>
                    
                </View>

        </View>
        </ScrollView >
        
      </ImageBackground>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    gen:{
        height:100,
        width:105,
        margin:5,
        backgroundColor:'#7a8699',
        padding:10,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'
    }
})