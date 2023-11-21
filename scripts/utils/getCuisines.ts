import axios from "axios";

const getCuisines = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/get-cuisines`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

export default getCuisines;
