import React from "react";
import {
  Dimensions,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { image500 } from "../api";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const MovieCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Movie", item)}
    >
      <Image
        source={{
          uri: image500(item.poster_path),
        }}
        style={{ width: width * 0.5, height: height * 0.5 }}
        className="rounded-3xl"
      />
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;
