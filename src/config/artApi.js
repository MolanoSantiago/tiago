import arts from "./arts.JS";
import { POST_ARTS } from "./routes";

export async function postAnimePicsApi(typeParam, tagParam) {
  const type = typeParam ?? "sfw";
  const tag = tagParam ?? "waifu";

  try {
    const response = await arts.post(POST_ARTS(type, tag), {});
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
