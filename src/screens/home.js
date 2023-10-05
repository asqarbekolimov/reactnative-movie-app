import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Image, ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

export default function Home({ navigation }) {
  return (
    <View className="flex-1 bg-slate-950">
      <SafeAreaView>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-3">
          <Image source={require("../../assets/logo.png")} />
          <MagnifyingGlassIcon size={30} strokeWidth={2} color={"white"} />
        </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      ></ScrollView>
    </View>
  );
}
