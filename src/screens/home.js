import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Image, ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import {
  fetchTopRatedMovie,
  fetchTrendingMovie,
  fetchUpcomingMovie,
} from "../api";
import TrendingMovie from "../components/trending-movie";
import UpcomingMovie from "../components/upcoming-movie";
import TopRatedMovie from "../components/top-rated-movie";

export default function Home({ navigation }) {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRatedMovie, setTopRatedMovie] = useState([]);

  useEffect(() => {
    getTrendingMovie();
    getUpcomingMovie();
    getTopRatedMovie();
  }, []);

  const getTrendingMovie = async () => {
    const data = await fetchTrendingMovie();
    setTrending(data.results);
  };
  const getUpcomingMovie = async () => {
    const data = await fetchUpcomingMovie();
    setUpcoming(data.results);
  };
  const getTopRatedMovie = async () => {
    const data = await fetchTopRatedMovie();
    setTopRatedMovie(data.results);
  };

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
      >
        {trending.length > 0 && <TrendingMovie />}
        {upcoming.length > 0 && <UpcomingMovie />}
        {topRatedMovie.length > 0 && <TopRatedMovie />}
      </ScrollView>
    </View>
  );
}
