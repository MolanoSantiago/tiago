import React from "react";
import { StyleSheet, FlatList, Platform } from "react-native";
import AnimeSearchCard from "./AnimeSearchCard";
import { COLORS, screenHeight } from "../../utils/constants";
import { SkypeIndicator } from "react-native-indicators";

export default function AnimeSearchList({
  animes,
  loadMoreAnimes,
  loading,
  pagination,
  search,
}) {
  const loadMore = () => {
    loadMoreAnimes(search, pagination.nextPage);
  };

  return (
    <FlatList
      data={animes}
      showsVerticalScrollIndicator={false}
      keyExtractor={(anime) => String(anime.id)}
      renderItem={({ item }) => <AnimeSearchCard anime={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={!loading && pagination.hasNextPage && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        loading &&
        pagination.hasNextPage && (
          <SkypeIndicator style={styles.spinner} color={COLORS.primary} size={30} />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    // paddingTop: screenHeight * 0.05,
    paddingBottom: screenHeight * 0.05,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
});
