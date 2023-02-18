import { View, Text } from "react-native";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomScreen from "./screens/HomScreen";
const StackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomScreen} />
        <Stack.Screen name="Home" component={HomScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
