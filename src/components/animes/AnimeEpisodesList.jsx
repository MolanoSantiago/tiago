import { FlatList, StyleSheet } from "react-native";
import React from "react";
import AnimeEpisodeCard from "./AnimeEpisodeCard";
import { screenHeight } from "../../utils/constants";

export default function AnimeEpisodesList({ episodes }) {
  return (
    <FlatList
      data={episodes}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(episode) => String(episode.id)}
      renderItem={({ item }) => <AnimeEpisodeCard episode={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingTop: screenHeight * 0.01,
  },
});
