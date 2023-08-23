import axios from "axios";
import { API_URL_ANIMES } from "../utils/constants";

const animes = axios.create({
  baseURL: API_URL_ANIMES,
});

export default animes;
