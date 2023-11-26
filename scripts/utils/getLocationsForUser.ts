import axios from "axios";

const getLocationsForUser = async (userId) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/${userId}`
    );

    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

export default getLocationsForUser;
