import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { COLORS } from "../../utils/constants";

const AnimeRating = ({ rating, total = 5 }) => {
  const scaledRating = Math.min(Math.max(rating / 20, 0), 5);

  const fullStars = Math.floor(scaledRating);
  const halfStar = scaledRating - fullStars >= 0.5;

  const starsArray = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      starsArray.push(
        <Icon key={i} name="star" color={COLORS.ternary} size={15} />
      );
    } else if (i === fullStars + 1 && halfStar) {
      starsArray.push(
        <Icon key={i} name="star-half" color={COLORS.ternary} size={15} />
      );
    }
  }

  return {
    scaledRating,
    stars: (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {starsArray}
        <Text style={{ marginLeft: 5, color: COLORS.textLight }}>
          {scaledRating}
        </Text>
      </View>
    ),
  };
};

export default AnimeRating;
