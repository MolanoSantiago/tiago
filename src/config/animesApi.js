import animes from "./animes";
import { GET_ANIME, GET_POPULAR, GET_SEARCH } from "./routes";

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

export async function getAnimesPopularApi(pageParam) {
  try {
    const response = await animes.get(GET_POPULAR(), {
      params: { page: pageParam, perPage: 15 },
    });
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

export async function getAnimeByIdApi(idParam) {
  try {
    const response = await animes.get(GET_ANIME(idParam));
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
