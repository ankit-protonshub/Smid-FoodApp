/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Components/Screens/SplashScreen/SplashScreen';
import LoginScreen from './Components/Screens/Login_SignupScreens/LoginScreen';
import OTPScreen from './Components/Screens/Login_SignupScreens/OTPScreen';
import HomeScreen from './Components/Screens/HomeScreens/HomeScreen';
import DetailsScreen from './Components/Screens/HomeScreens/DetailsScreen';
import Workouts from './Components/Screens/MainWorkouts.tsx/Workouts';

const Stack = createNativeStackNavigator();

export default function App() {
  // console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{
          headerShown : false
        }}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
          headerShown : false
        }}/>
        <Stack.Screen name="OTPScreen" component={OTPScreen} options={{
          headerShown : false
        }}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{
          headerShown : false
        }} />
        <Stack.Screen name="Workouts" component={Workouts} options={{
          headerShown : false
          // ({ route }) => ({ title: route.params.name })
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default App;
