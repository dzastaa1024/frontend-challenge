import axios from "axios";

// All of your API requests should be in this file
// i.e.
const API_KEY = "92d08d6d237c657537491b280a96d75a";
const BASE_URL = "https://api.themoviedb.org";

export const getMovieGenres = async (keyword, year) => {
  const url = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${keyword}&year=${year}`;

  const response = await axios.get(url);
  return response.data;
};
