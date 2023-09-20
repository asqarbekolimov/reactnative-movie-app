import React from "react";
import { StatusBar, Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-400">
      <Text>Home!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
