// import "react-native-gesture-handler";
import React from "react";

import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./Home";
import { Platform } from "react-native";
import { useFonts } from "expo-font";
import AppLoading  from "expo-app-loading";
import Header from "./Header";
import Footer from './Footer'
import {navigationRef} from './RootNavigation'

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        }}
        ref={navigationRef}
      >
        <Stack.Navigator
          intialRouteName="Globomantics"
          headerMode="screen"
          options={{ header: () => <Header headerDispaly="Globomantics" /> }}
        >
          <Stack.Screen name="Globomantics" component={HomePage} />
        </Stack.Navigator>
        <Footer/>
      </NavigationContainer>
    );
  }
}
