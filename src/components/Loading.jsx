import React from "react";
import { StyleSheet, View } from "react-native";
import { SkypeIndicator } from "react-native-indicators";
import { COLORS, screenHeight, screenWidth } from "../utils/constants";

const Loading = ({size}) => {
  return (
    <View style={styles.loading}>
      <SkypeIndicator color={COLORS.primary} size={size ?? 50} />
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
