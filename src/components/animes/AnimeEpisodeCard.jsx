import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS } from "../../utils/constants";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function AnimeEpisodeCard({ episode }) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Icon
          name="play"
          size={30}
          color={COLORS.primary}
          style={styles.playIcon}
        />
        <Image source={{ uri: episode.image }} style={styles.image} />
      </View>
      <Text style={styles.title}>{episode.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 260,
    marginHorizontal: 10,
    backgroundColor: COLORS.secundary,
    borderRadius: 10,
    elevation: 3,
  },
  imageContainer: {
    position: "relative",
  },
  playIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -15 }, { translateY: -15 }],
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: COLORS.textLight,
    fontSize: 16,
    fontWeight: "bold",
  },
});
