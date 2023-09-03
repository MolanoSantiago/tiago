import React from "react";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, screenHeight } from "../utils/constants";

const Background = ({ children, solidColor }) => {
  return (
    <SafeAreaView style={styles(solidColor).container}>
      {solidColor ? null : (
        <LinearGradient
          colors={[COLORS.textDark, COLORS.secundary]}
          style={styles(solidColor).background}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
      )}
      {children}
    </SafeAreaView>
  );
};

export default Background;

const styles = (solidColor) =>
  StyleSheet.create({
    container: {
      paddingTop: Platform.OS === "android" ? 40 : 30,
      flex: 1,
      backgroundColor: solidColor ? COLORS.textDark : "transparent",
    },
    background: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      height: screenHeight,
    },
  });
