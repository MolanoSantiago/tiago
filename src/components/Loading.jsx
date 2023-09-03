import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { COLORS, screenHeight, screenWidth } from "../utils/constants";

const Loading = ({size}) => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator color={COLORS.primary} size={size ?? 50} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loading: {
    width: screenWidth,
    height: screenHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});
