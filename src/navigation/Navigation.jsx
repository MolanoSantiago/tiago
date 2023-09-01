import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Image } from "react-native";
import AccountNavigation from "./AccountNavigation";
import ArtsNavigation from "./ArtsNavigation";
import AnimesNavigation from "./AnimesNavigation";
import { COLORS } from "../utils/constants";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AnimesNavigator"
        component={AnimesNavigation}
        options={{
          headerTitle: "",
          headerTransparent: true,
          tabBarLabel: "Animes",
          tabBarActiveTintColor: COLORS.primary,
          tabBarIcon: ({ color, size }) => (
            <Icon name="play-circle" color={COLORS.primary} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="ArtsNavigator"
        component={ArtsNavigation}
        options={{
          headerTitle: "",
          headerTransparent: true,
          tabBarLabel: "",
          tabBarIcon: () => renderMainImage(),
        }}
      />
      <Tab.Screen
        name="AccountNavigator"
        component={AccountNavigation}
        options={{
          headerTitle: "",
          headerTransparent: true,
          tabBarLabel: "Cuenta",
          tabBarActiveTintColor: COLORS.primary,
          tabBarIcon: ({ color, size }) => (
            <Icon name="user-alt" color={COLORS.primary} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderMainImage() {
  return (
    <Image
      source={require("../assets/animes.png")}
      style={{ width: 100, height: 100, top: -15 }}
    />
  );
}
