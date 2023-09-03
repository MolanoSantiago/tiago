import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, screenHeight } from "../../utils/constants";
import { LinearGradient } from "expo-linear-gradient";
import AnimeRating from "./AnimeRating";
import _ from "lodash";
import { useToggle } from "../../hooks/useToggle";
import AnimeEpisodesList from "./AnimeEpisodesList";

export default function AnimeContent({ anime }) {
  const { scaledRating, stars } = AnimeRating({ rating: anime.averageScore });

  const [expanded, toggleExpanded] = useToggle();

  const descriptionTruncated = (description) => {
    return _.truncate(description, {
      length: 250,
      omission: "...",
    });
  };

  return (
    <LinearGradient
      colors={["transparent", COLORS.textDark]}
      style={styles.container}
      locations={[0.01, 0.1]}
    >
      <Text style={styles.title}>
        {_.capitalize(anime.title.english ?? anime.title.userPreferred)}
      </Text>
      <Text style={styles.format}>{anime.format}</Text>
      <Text style={styles.averageScore}>{stars}</Text>
      {expanded ? (
        <TouchableOpacity onPress={toggleExpanded}>
          <Text style={styles.description}>{anime.description}</Text>
          <Text style={styles.readLess}>Read less</Text>
        </TouchableOpacity>
      ) : (
        <View>
          <TouchableOpacity onPress={toggleExpanded}>
            <Text style={styles.description}>
              {descriptionTruncated(anime.description)}{" "}
            </Text>
            <Text style={styles.readMore}>Read more</Text>
          </TouchableOpacity>
        </View>
      )}
      <Text style={styles.episodesHeader}>Episodes</Text>
      <AnimeEpisodesList episodes={anime.episodes} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: screenHeight - 100,
    marginTop: screenHeight * 0.45,
    paddingVertical: 50,
    paddingHorizontal: 15,
  },
  title: {
    color: COLORS.textLight,
    fontWeight: "bold",
    fontSize: 24,
    paddingVertical: 5,
  },
  format: {
    color: COLORS.textLight,
    fontSize: 14,
    paddingVertical: 2,
  },
  averageScore: {
    paddingVertical: 5,
  },
  description: {
    color: COLORS.textLight,
    paddingVertical: 5,
  },
  readMore: {
    color: COLORS.primary,
    fontWeight: "bold",
    marginTop: 10,
  },
  readLess: {
    color: COLORS.primary,
    fontWeight: "bold",
    marginTop: 10,
    opacity: 0.5,
  },
  episodesHeader: {
    color: COLORS.textLight,
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 30,
  },
});
