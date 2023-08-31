import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { COLORS, screenHeight } from "../../utils/constants";
import { Picker } from "@react-native-picker/picker";

export default function AnimePicsTags({
  filter,
  setFilter,
  nsfw,
  sfw,
}) {

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Tipo</Text>
          <Picker
            selectedValue={filter.type}
            onValueChange={(itemValue, itemIndex) =>
              setFilter({
                ...filter,
                type: itemValue,
              })
            }
          >
            <Picker.Item label="SFW" value="sfw" />
            <Picker.Item label="NSFW" value="nsfw" />
          </Picker>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Categoría</Text>
          <Picker
            selectedValue={filter.tag}
            onValueChange={(itemValue, itemIndex) =>
              setFilter({
                ...filter,
                tag: itemValue,
              })
            }
          >
            {filter.type === "sfw"
              ? sfw.map((category) => (
                  <Picker.Item
                    key={category}
                    label={category}
                    value={category}
                  />
                ))
              : nsfw.map((category) => (
                  <Picker.Item
                    key={category}
                    label={category}
                    value={category}
                  />
                ))}
          </Picker>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  filterContainer: {
    paddingTop: screenHeight * 0.08,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  buttonContainer: {
    padding: 10,
    borderRadius: 15,
    width: 180
  },
  buttonText: {
    color: COLORS.textLight,
    fontWeight: "bold"
  },
});
