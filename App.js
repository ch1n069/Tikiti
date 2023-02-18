import { StatusBar } from "expo-status-bar";
// import "react-native-gesture-handler";
import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomScreen from "./screens/HomScreen";
import MovieScreen from "./screens/MovieScreen";
import { MovieContext } from "./context";
import TheartreScreen from "./screens/TheartreScreen";
// import { Stack } from "react-bootstrap";
const Stack = createStackNavigator();
export default function App() {
  return (
    <>
      <MovieContext>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="home"
              component={HomScreen}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="movies"
              component={MovieScreen}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="theatre"
              component={TheartreScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </MovieContext>
    </>
  );
}
