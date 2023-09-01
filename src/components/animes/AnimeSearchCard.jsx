import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../utils/constants";
import Icon from "react-native-vector-icons/FontAwesome5";
import NumberWithSeparator from "../NumberWithSeparator";

export default function AnimeSearchCard(props) {
  const { anime } = props;

  const goToAnime = () => {
    console.log(`Vamos al anime: ${anime.title.english}`);
  };

  const gradientColors = [COLORS.secundary, anime.color];

  const createRating = ({ rating, total = 5, icon = "★", emptyIcon = "☆" }) => {
    const scaledRating = Math.ceil(rating / 20);
    const stars = icon.repeat(scaledRating);
    const empty = emptyIcon.repeat(total - scaledRating);

    return stars + empty;
  };

  return (
    <View style={styles.card}>
      <LinearGradient colors={gradientColors} style={styles.infoContainer}>
        <Text style={styles.name}>{anime.title.english}</Text>
        <Text style={styles.format}>{anime.format}</Text>
        <View style={styles.popularityContainer}>
          <NumberWithSeparator
            number={anime.popularity}
            color={COLORS.textLight}
          />
          <Icon name="eye" color={COLORS.secundary} size={20} />
        </View>
        <Text style={styles.rating}>
          {createRating({ rating: anime.averageScore })}
        </Text>
      </LinearGradient>
      <View style={styles.coverImageContainer}>
        <Image
          source={{ uri: anime.coverImage }}
          style={styles.coverImage}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={goToAnime}>
        <Text style={styles.btnText}>Ver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 180,
    flexDirection: "row",
    marginVertical: 10,
  },
  infoContainer: {
    flex: 1,
    padding: 10,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },
  name: {
    color: COLORS.textLight,
    fontWeight: "bold",
    fontSize: 18,
  },
  format: {
    color: COLORS.textLight,
    fontSize: 10,
  },
  coverImageContainer: {
    width: "35%",
    overflow: "hidden",
  },
  coverImage: {
    flex: 1,
    resizeMode: "contain",
  },
  btn: {
    backgroundColor: COLORS.secundary,
    width: 80,
    height: 25,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  btnText: {
    textAlign: "center",
    color: COLORS.textLight,
    fontWeight: "bold",
    fontSize: 15,
  },
  rating: {
    color: "#E49B0F",
  },
  popularityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
