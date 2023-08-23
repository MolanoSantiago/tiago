import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS, screenHeight } from "../../utils/constants";
import { LinearGradient } from "expo-linear-gradient";

export default function AnimeSearchCard(props) {
  const { anime } = props;

  const goToAnime = () => {
    console.log(`Vamos al anime: ${anime.title}`);
  };

  return (
    <View style={styles.card}>
      <View style={styles.spacing}>
        <LinearGradient
          colors={["#A71D31", "#3F0D12"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.bgStyles}
        >
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{anime.title}</Text>
            <Text style={styles.type}>{anime.type}</Text>
          </View>
          <Image source={{ uri: anime.image }} style={styles.image} />
          <TouchableOpacity style={styles.btn} onPress={goToAnime}>
            <Text style={styles.btnText}>Ver</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 150,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
    position: "relative",
  },
  infoContainer: {
    flex: 1,
    marginBottom: 10,
  },
  name: {
    color: COLORS.textLight,
    fontWeight: "bold",
    fontSize: 18,
    width: 240,
  },
  type: {
    color: COLORS.textLight,
    fontSize: 15,
  },
  image: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 120,
    height: screenHeight * 0.177,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    resizeMode: "cover",
  },
  btn: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: COLORS.secundary,
    width: 80,
    height: 25,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    textAlign: "center",
    color: COLORS.textLight,
    fontWeight: "bold",
    fontSize: 15,
  },
});
