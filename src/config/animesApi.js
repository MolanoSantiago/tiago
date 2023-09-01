import animes from "./animes";
import { GET_SEARCH } from "./routes";

export async function getAnimesSearchApi(searchParam, pageParam) {
  try {
    const response = await animes.get(GET_SEARCH(searchParam), {
      params: { page: pageParam, perPage: 15 },
    });
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
