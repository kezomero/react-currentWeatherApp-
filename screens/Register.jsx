import { Alert, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React ,{useState} from 'react'
import { TextInput,TouchableOpacity } from 'react-native-gesture-handler'

const Register = ({navigation}) => {
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const handleLogin=()=>{
        navigation.navigate('Login')
        alert('Login success')
    }
  return (
    <View style={styles.container}>
        <ImageBackground
            source={require('../assets/register.jpg')}            
            style={{flex:1,height:'100%',width:'100%'}}
            blurRadius={8}
        >
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
             
                <Text style={{ color: 'white', fontSize: 30, marginBottom: 30, fontWeight: 'bold' }}>Create an Account</Text>
                <TextInput placeholder='Full Name'  style={styles.input} />
                <TextInput placeholder='Email' style={styles.input} />
                <TextInput placeholder='Password' style={styles.input}secureTextEntry />
                <TextInput placeholder='Repeat Password' style={styles.input}secureTextEntry />
                <TouchableOpacity style={{ marginTop: 20 }} >
                    <Text style={{ color: 'cyan', fontSize: 20, fontWeight: 'bold' }}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 5 }} onPress={handleLogin}>
                    <Text style={{ color: 'cyan', fontSize: 20, fontWeight: 'bold' }}>Already Have Account?</Text>
                </TouchableOpacity> 

            </View>

        </ImageBackground>
    </View>
  )
}

export default Register

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