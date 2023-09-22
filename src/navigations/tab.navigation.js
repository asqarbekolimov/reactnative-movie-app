import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Home from "../screens/home";
import Detailed from "../screens/detailed";
import Ion from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Detailed") {
              iconName = focused ? "settings" : "settings-outline";
            }
            return <Ion name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "crimson",
          tabBarInactiveTintColor: "black",
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Detailed"
          component={Detailed}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
