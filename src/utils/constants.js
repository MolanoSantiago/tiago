import { Dimensions } from "react-native";

export const API_URL_ART = "https://api.waifu.pics";

export const API_URL_ANIMES = "https://api.consumet.org/anime/zoro";

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

export const ANIME_TYPE_COLOR = {
  tv: ["#A71D31", "#3F0D12"],
  movie: ["#CE203C", "#000000"],
  special: ["#91221E", "#030202"],
  ova: ["#DA2D2D", "#272822"],
  ona: ["#000C14", "#F8002F"],
};

export const COLORS = {
  primary: "#df2935",
  secundary: "#1e1f26",
  ternary: "#DE544E",
  textLight: "#efefef",
  textDark: "#010606",
};
