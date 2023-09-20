import React from "react";
import { Button, Text, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-blue-400">
      <Text>Home!</Text>
      <Button
        title="GO to details"
        onPress={() => navigation.navigate("Detailed")}
      />
    </View>
  );
}
