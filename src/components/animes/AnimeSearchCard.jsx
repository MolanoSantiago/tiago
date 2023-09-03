import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../utils/constants";
import Icon from "react-native-vector-icons/FontAwesome5";
import NumberWithSeparator from "../NumberWithSeparator";
import _ from "lodash";
import { useNavigation } from "@react-navigation/native";
import AnimeRating from "./AnimeRating";

export default function AnimeSearchCard(props) {
  const { anime } = props;

  const { scaledRating, stars } = AnimeRating({ rating: anime.averageScore });

  const navigation = useNavigation();

  const goToAnime = () => {
    navigation.navigate("Anime", {
      id: anime.id,
    });
  };

  const gradientColors = [COLORS.secundary, anime.color ?? COLORS.primary];

  const nameTruncated = (name) => {
    return _.truncate(name, {
      length: 70,
      omission: "...",
    });
  };

  return (
    <View>
      <TouchableOpacity style={styles.card} onPress={goToAnime}>
        <LinearGradient colors={gradientColors} style={styles.infoContainer}>
          <Text style={styles.name}>
            {nameTruncated(anime.title.english ?? anime.title.userPreferred)}
          </Text>
          <Text style={styles.format}>{anime.format}</Text>
          <View style={styles.popularityContainer}>
            <NumberWithSeparator
              number={anime.popularity}
              color={COLORS.textLight}
            />
            <Icon name="eye" color={COLORS.secundary} size={20} />
          </View>
          <Text style={styles.rating}>{stars}</Text>
        </LinearGradient>
        <View style={styles.coverImageContainer}>
          <Image
            source={{ uri: anime.coverImage }}
            style={styles.coverImage}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 190,
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
  popularityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
