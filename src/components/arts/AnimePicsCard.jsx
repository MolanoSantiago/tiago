import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { screenWidth } from "../../utils/constants";

export default function AnimePicsCard({ item, toggleModal }) {
  return (
    <View style={styles.imageViewContainer}>
      <TouchableOpacity onPress={() => toggleModal(item.image)}>
        <Image
          source={{ uri: item.image }}
          style={{ width: screenWidth / 3, height: screenWidth / 3 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imageViewContainer: {
    flex: 1,
    alignItems: "center",
  },
});
