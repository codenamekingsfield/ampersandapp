import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import AuthenticationScreen from './src/screens/AuthenticationScreen';
import LogInScreen from './src/screens/LogInScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import MemberScreen from "./src/screens/MemberScreen";
import ProfileScreen from  "./src/screens/ProfileScreen";
import QrscannerScreen from './src/screens/QrscannerScreen';
import ScanScreen from './src/screens/Scanscreen';

import {NavigationContainer} from '@react-navigation/native'; 
import {createStackNavigator} from '@react-navigation/stack';



const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          options={{
            title: "REGISTER",
            headerStyle: {
              backgroundColor: "red",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
          name="RegisterScreen"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{
            title: "SIGN IN",
            headerStyle: {
              backgroundColor: "red",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
          name="LogInScreen"
          component={LogInScreen}
        />
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="AuthenticationScreen"
          component={AuthenticationScreen}
        />

        <Stack.Screen
          options={{
            title: "AMPERSAND",
            headerStyle: {
              backgroundColor: "red",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
          name="QrscannnerScreen"
          component={QrscannerScreen}
        />

        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="ScanScreen"
          component={ScanScreen}
        />

        <Stack.Screen
          options={{
            title: "MEMBER PROFILE",
            headerStyle: {
              backgroundColor: "red",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
          name="MemberScreen"
          component={MemberScreen}
        />


        <Stack.Screen
          options={{
            title: "My PROFILE",
            headerStyle: {
              backgroundColor: "red",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
          name="ProfileScreen"
          component={ProfileScreen}
        />
       
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}