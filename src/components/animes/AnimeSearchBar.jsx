import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import _ from "lodash";
import { COLORS, screenHeight } from "../../utils/constants";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function AnimeSearchBar({
  search,
  setSearch,
  pagination,
  animes,
  handlerSearch,
  clearStates,
  loading,
}) {
  const newSearch = async () => {
    await clearStates(true);
    await handlerSearch("");
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search anime"
          clearButtonMode="always"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : pagination.search !== "" && !_.isEmpty(animes) ? (
        <TouchableOpacity style={styles.searchButton} onPress={newSearch}>
          <Icon name="times" color={COLORS.primary} size={20} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            handlerSearch(search);
          }}
        >
          <Icon name="search" color={COLORS.primary} size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    paddingTop: screenHeight * 0.02,
    paddingBottom: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
  },
  searchInput: {
    paddingHorizontal: 20,
    borderRadius: 15,
    height: screenHeight * 0.06,
    backgroundColor: COLORS.textLight,
  },
  searchButton: {
    marginVertical: 10,
    marginHorizontal: 10,
    height: screenHeight * 0.06,
    justifyContent: "center",
    alignItems: "center",
  },
});
