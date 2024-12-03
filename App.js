import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Drying from './components/Drying';
import Temperature from './components/Temperature';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name = "Login" component = {Login}  options = {{ headerShown: false }}/>
        <Stack.Screen name = 'SignUp' component = {SignUp} options = {{ headerShown: false }} />
        <Stack.Screen name = "Dashboard" component = {Dashboard} options = {{ headerShown: false }} />
        <Stack.Screen name= "Drying" component={Drying} options={{ title: 'Drying Status' }} />
        <Stack.Screen name= "Temperature" component={Temperature} options={{ title: 'Temperature' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
