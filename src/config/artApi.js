import arts from "./arts.JS";
import { POST_ARTS } from "./routes";

export async function postAnimePicsApi(filter) {
  try {
    const response = await arts.post(POST_ARTS(filter.type, filter.tag), {});
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
