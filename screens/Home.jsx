import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Home = () => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <ImageBackground
            style={{flex:1,height:'100%',width:'100%'}}
            source={require('../assets/back.jpg')}
            blurRadius={12}
        >
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

                <Text style={{fontSize:50,fontStyle:'italic',fontWeight:'bold',color:'#ccc'}}>WEATHER</Text>
                <Text style={{fontSize:40,fontStyle:'italic',fontWeight:'normal',color:'black'}}>forecast</Text>
                <View style={{marginTop:30,backgroundColor:'cyan',width:100,height:35,borderRadius:20,alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity>
                        <Text style={{fontWeight:'bold',fontSize:18}}>Get Started</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={{fontSize:17,color:'blue',marginTop:10}}>Create Account</Text>
                </TouchableOpacity>

            </View>           

        </ImageBackground>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})