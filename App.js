import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
import Main from './screens/Main';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const Stack=createStackNavigator()
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
            <Stack.Screen name='Register' component={Register} options={{headerShown:false}}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
            <Stack.Screen name='Main' component={Main} options={{headerShown:false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({});
