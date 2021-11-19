import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import CustomDrawer from "./navigation/CustomDrawer";

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./stores/rootReducer";
import EventDetail from "./screens/Home/EventDetail";

const fetchFont = () => {
  return Font.loadAsync({
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf")
  })
}

const Stack = createStackNavigator();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

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
        <Provider store={store}>
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
                  <Stack.Screen
                      name="EventDetail"
                      component={EventDetail}
                  />
              </Stack.Navigator>
          </NavigationContainer>
        </Provider>
    )
}

//export default App