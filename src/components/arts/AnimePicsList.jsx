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
            <Icon name="times-circle" color={COLORS.textLight} size={30} />
          </TouchableOpacity>
          {selectedImage && (
            <View style={styles.modalImageContainer}>
              <Image
                source={{ uri: selectedImage }}
                style={styles.modalImage}
              />
            </View>
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
    paddingBottom: screenHeight * 0.17,
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
  modalImageContainer: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.8,
    overflow: "hidden",
  },
  modalImage: {
    flex: 1,
    resizeMode: "contain",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 15,
    zIndex: 1,
  },
});
