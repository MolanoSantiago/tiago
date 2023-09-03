import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { COLORS, screenHeight } from "../../utils/constants";
import { Picker } from "@react-native-picker/picker";

export default function AnimePicsTags({ filter, setFilter, nsfw, sfw }) {
  const handleTypeChange = (itemValue, itemIndex) => {
    const newFilter = { ...filter, type: itemValue };

    if (itemValue === "sfw" && !sfw.includes(filter.tag)) {
      newFilter.tag = sfw[0];
    } else if (itemValue === "nsfw" && !nsfw.includes(filter.tag)) {
      newFilter.tag = nsfw[0];
    }

    setFilter(newFilter);
  };

  return (
    <View
      style={styles.container}
    >
      <View style={styles.filterContainer}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Tipo</Text>
          <Picker
            selectedValue={filter.type}
            onValueChange={handleTypeChange}
            mode="dropdown"
            dropdownIconColor={COLORS.textLight}
            dropdownIconRippleColor={COLORS.textLight}
          >
            <Picker.Item label="SFW" value="sfw" style={styles.labelText} />
            <Picker.Item label="NSFW" value="nsfw" style={styles.labelText} enabled={false} />
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
            mode="dropdown"
            dropdownIconColor={COLORS.textLight}
            dropdownIconRippleColor={COLORS.textLight}
          >
            {filter.type === "sfw"
              ? sfw.map((category) => (
                  <Picker.Item
                    key={category}
                    label={category}
                    value={category}
                    style={styles.labelText}
                  />
                ))
              : nsfw.map((category) => (
                  <Picker.Item
                    key={category}
                    label={category}
                    value={category}
                    style={styles.labelText}
                  />
                ))}
          </Picker>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secundary,
  },
  filterContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  buttonContainer: {
    padding: 10,
    borderRadius: 15,
    width: 180,
  },
  buttonText: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
  labelText: {
    color: COLORS.textLight,
    backgroundColor: COLORS.secundary,
  },
});
