import axios from "axios";

const getLocationsForUser = async (userId) => {
  console.log("base URL is", process.env.NEXT_PUBLIC_BASE_URL);
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/${userId}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

export default getLocationsForUser;
