import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from "react-native";
import React from "react";
import _ from "lodash";
import { COLORS, screenHeight } from "../../utils/constants";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function AnimeSearchBar({
  search,
  setSearch,
  animes,
  handlerSearch,
  clearStates,
}) {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Buscar anime"
          clearButtonMode="always"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>
      {search !== "" && !_.isEmpty(animes) ? (
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            clearStates(true);
          }}
        >
          <Icon name="times" color={COLORS.textLight} size={18} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            handlerSearch(search);
          }}
        >
          <Icon name="search" color={COLORS.textLight} size={18} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    paddingTop: screenHeight * 0.08,
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
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 15,
    height: screenHeight * 0.06,
    backgroundColor: COLORS.textLight,
  },
  searchButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: screenHeight * 0.06,
    justifyContent: "center",
    alignItems: "center",
  },
});
