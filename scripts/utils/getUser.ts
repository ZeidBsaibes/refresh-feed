import axios from "axios";

const getUser = async (userId) => {
  try {
    const response = await axios.get(`/api/user-detail/${userId}`);

    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

export default getUser;
