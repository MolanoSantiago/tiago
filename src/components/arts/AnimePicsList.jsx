import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Modal,
  Image,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import AnimePicsCard from "./AnimePicsCard";
import { useToggle } from "../../hooks/useToggle";
import Icon from "react-native-vector-icons/FontAwesome5";
import { COLORS, screenHeight, screenWidth } from "../../utils/constants";

export default function AnimePicsList({ pics, onRefresh, refreshing }) {
  const [isVisible, toggleVisibility] = useToggle();
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleModal = (image) => {
    setSelectedImage(image);
    toggleVisibility();
  };

  return (
    <View style={styles.container}>
      <Modal visible={isVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={toggleVisibility}
            style={styles.closeButton}
          >
            <Icon name="times-circle" color={COLORS.textLight} size={25} />
          </TouchableOpacity>
          {selectedImage && (
            <Image source={{ uri: selectedImage }} style={styles.modalImage} />
          )}
        </View>
      </Modal>
      <FlatList
        data={pics}
        horizontal={false}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pic, index) => index.toString()}
        renderItem={({ item }) => (
          <AnimePicsCard item={item} toggleModal={toggleModal} />
        )}
        contentContainerStyle={styles.flatListContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    // paddingTop: screenHeight * 0.04,
  },
  flatListContainer: {
    // paddingTop: screenHeight * 0.045,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalImage: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.8,
    borderRadius: 18,
    resizeMode: "cover",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },
});
