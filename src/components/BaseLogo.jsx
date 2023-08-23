import React from "react";
import { View, Image, StyleSheet } from "react-native";
import logo from "../../assets/icon.png";
import { screenWidth } from "../utils/constants";

const BaseLogo = ({ home, secondary, marginBottom }) => {
  return (
    <View
      style={[
        styles.header,
        { marginBottom: marginBottom ? marginBottom : 15 },
      ]}
    >
      <Image
        style={home ? styles.headerLogo2 : styles.headerLogo1}
        resizeMode="contain"
        source={logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerLogo1: {
    width: 155,
    height: 40,
  },
  headerLogo2: {
    width: 125,
    height: 30,
  },
  header: {
    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BaseLogo;
