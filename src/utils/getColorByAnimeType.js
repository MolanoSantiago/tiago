import { ANIME_TYPE_COLOR } from "./constants";

const getColorByAnimeType = (type) => ANIME_TYPE_COLOR[type.toLowerCase()];

export default getColorByAnimeType;