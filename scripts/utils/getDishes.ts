import axios from "axios";

const getDishes = async () => {
  try {
    const response = await axios.get("api/get-dishes");

    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

export default getDishes;
