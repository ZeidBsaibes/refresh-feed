import axios from "axios";

const handleSearch = async (searchQuery) => {
  try {
    const response = await axios.get(`/api/search/?search=${searchQuery}`);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

export default handleSearch;
