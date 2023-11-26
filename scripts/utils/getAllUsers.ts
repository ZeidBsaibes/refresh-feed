import axios from "axios";

const getAllUsers = async () => {
  try {
    const response = await axios.get("api/users");

    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

export default getAllUsers;
