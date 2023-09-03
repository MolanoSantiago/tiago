import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AnimesScreen from "../screens/animes/index";
import AnimeScreen from "../screens/animes/Anime";

const Stack = createNativeStackNavigator();

export default function AnimesNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Animes"
        component={AnimesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Anime"
        component={AnimeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
