import { StyleSheet, Text, View,ImageBackground,Alert } from 'react-native'
import React ,{useState}from 'react'
import { TextInput,TouchableOpacity } from 'react-native-gesture-handler'

const Login = ({navigation}) => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleRegister=()=>{
        navigation.navigate('Register')
    }
    const handleMain=()=>{        
        
        navigation.navigate('Main')
    }
  return (
    <View style={styles.container}>
        <ImageBackground
            source={require('../assets/register.jpg')}            
            style={{flex:1,height:'100%',width:'100%'}}
            blurRadius={8}
        >
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
             
                <Text style={{ color: 'white', fontSize: 30, marginBottom: 30, fontWeight: 'bold' }}>Login</Text>
                <TextInput placeholder='Email' style={styles.input} />
                <TextInput placeholder='Password' style={styles.input}secureTextEntry />
                <TouchableOpacity style={{ marginTop: 20 }} onPress={handleMain} >
                    <Text style={{ color: 'cyan', fontSize: 20, fontWeight: 'bold' }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 5 }} onPress={handleRegister}>
                    <Text style={{ color: 'cyan', fontSize: 20, fontWeight: 'bold' }}>Create Account?</Text>
                </TouchableOpacity> 

            </View>

        </ImageBackground>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
      },
      input: {
        width: '70%',
        padding: 10,
        backgroundColor: 'white',
        marginTop: 10,
        fontSize:15,
        borderRadius:17
      }
})