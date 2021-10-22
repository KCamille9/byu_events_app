import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import CustomDrawer from "./navigation/CustomDrawer"

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFont = () => {
  return Font.loadAsync({
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf")
  })
}

const Stack = createStackNavigator();

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
      return (
        <AppLoading 
          startAsync={fetchFont}
          onError={() => console.log("ERROR")}
          onFinish={() => {
            setFontLoaded(true);
          }}
        />
      );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                <Stack.Screen
                    name="Home"
                    component={CustomDrawer}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

//export default App