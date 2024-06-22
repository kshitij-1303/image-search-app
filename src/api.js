import axios from "axios";

const searchImages = async (term) => {
  const key = process.env.REACT_APP_ID;
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${key}`,
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
