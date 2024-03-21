import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Movie from "../screens/movie";
import Person from "../screens/person";

const Stack = createNativeStackNavigator();

export default function AppNavigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Movie"
          component={Movie}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Person"
          component={Person}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
