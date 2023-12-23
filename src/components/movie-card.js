import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { image500 } from "../api";

const { width, height } = Dimensions.get("window");

const MovieCard = ({ item }) => {
  return (
    <View>
      <Image
        source={{
          uri: image500(item.poster_path),
        }}
        style={{ width: width * 0.5, height: height * 0.5 }}
        className="rounded-3xl"
      />
    </View>
  );
};

export default MovieCard;
