import axios from "axios";
import { API_URL_ART } from "../utils/constants";

const arts = axios.create({
  baseURL: API_URL_ART,
});

export default arts;
