import { Dimensions } from "react-native";

export const API_URL_ART = "https://api.waifu.pics";

export const API_URL_ANIMES = "https://api.enime.moe";

export const SFW = [
  "waifu",
  "neko",
  "shinobu",
  "megumin",
  "bully",
  "cuddle",
  "cry",
  "hug",
  "awoo",
  "kiss",
  "lick",
  "pat",
  "smug",
  "bonk",
  "yeet",
  "blush",
  "smile",
  "wave",
  "highfive",
  "handhold",
  "nom",
  "bite",
  "glomp",
  "slap",
  "kill",
  "kick",
  "happy",
  "wink",
  "poke",
  "dance",
  "cringe",
];

export const NSFW = ["waifu", "neko", "trap", "blowjob"];

export const { width: screenWidth, height: screenHeight } =
  Dimensions.get("window");

export const COLORS = {
  primary: "#06bcee",
  secundary: "#1e1f26",
  ternary: "#ff6600",
  textLight: "#efefef",
  textDark: "#010606",
};
