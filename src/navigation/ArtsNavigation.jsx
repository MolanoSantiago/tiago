import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ArtsScreen from "../screens/arts/index";

const Stack = createNativeStackNavigator();

export default function ArtsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Animes"
        component={ArtsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
