import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  fetchMovieCredits,
  fetchMovieDetail,
  fetchMovieSimilar,
  image500,
} from "../api";
import Loader from "../components/loader";
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("window");

export default function Movie() {
  const [isFavourite, setIsFavourite] = useState(false);
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [similarMovie, setSimilarMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();
  const { params: id } = useRoute();
  useEffect(() => {
    getMovieDetail();
    getMovieCredits();
    getMovieSimilar();
  }, [id?.id]);

  const getMovieDetail = async () => {
    const data = await fetchMovieDetail(id?.id);
    setMovie(data);
    setIsLoading(false);
  };
  const getMovieCredits = async () => {
    const data = await fetchMovieCredits(id?.id);
    setCast(data.cast);
  };
  const getMovieSimilar = async () => {
    const data = await fetchMovieSimilar(id?.id);
    setSimilarMovie(data.results);
  };

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className={"flex-1 bg-slate-900"}
    >
      <View className={"w-full"}>
        <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeftIcon color={"#fff"} strokeWidth={2.5} size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsFavourite((prev) => !prev)}>
            <HeartIcon
              color={isFavourite ? "red" : "#fff"}
              strokeWidth={2.5}
              size={35}
            />
          </TouchableOpacity>
        </SafeAreaView>
        {isLoading ? (
          <Loader />
        ) : (
          <View>
            <Image
              source={{ uri: image500(movie.poster_path) }}
              style={{ width, height: height * 0.5 }}
            />
            <LinearGradient
              colors={[
                "transparent",
                "rgba(23, 23,23, 0.8)",
                "rgba(23, 23, 23, 1)",
              ]}
              style={{ width, height: height * 0.5 }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              className="absolute bottom-0"
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
}
