import axios from "axios";

const addFriend = async (senderId, email) => {
  try {
    const response = await axios.post("/api/friends/add", {
      senderId,
      email,
    });

    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

export default addFriend;
