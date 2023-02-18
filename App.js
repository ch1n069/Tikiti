import { StatusBar } from "expo-status-bar";
// import "react-native-gesture-handler";
import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomScreen from "./screens/HomScreen";
import MovieScreen from "./screens/MovieScreen";
// import { Stack } from "react-bootstrap";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomScreen}></Stack.Screen>
        <Stack.Screen name="movies" component={MovieScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
