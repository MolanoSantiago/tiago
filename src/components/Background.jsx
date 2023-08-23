import React, { useState, useRef, useCallback } from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, screenHeight } from "../utils/constants";

const Background = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={COLORS.primary}
        translucent={true}
      />
      <LinearGradient
        colors={[COLORS.textDark, COLORS.secundary]}
        style={styles.background}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      {children}
    </SafeAreaView>
  );
};

export default Background;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
