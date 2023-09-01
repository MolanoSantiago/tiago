import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NumberWithSeparator({ number, color = "black" }) {
  const numberWithSeparator = number.toLocaleString("es-CO"); // Puedes cambiar 'en-US' según tu configuración regional

  return (
    <View>
      <Text style={styles(color).text}>{numberWithSeparator} </Text>
    </View>
  );
}

const styles = (color) =>
  StyleSheet.create({
    text: {
      color: color,
    },
  });
