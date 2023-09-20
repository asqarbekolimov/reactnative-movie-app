import React from "react";
import { Button, Text, View } from "react-native";

export default function Detailed({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-blue-400">
      <Text>Detailed!</Text>
      <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
