import axios from "axios";

const getFriends = async (userId, statuses) => {
  try {
    const response = await axios.post("/api/friends/fetch", {
      userId,
      statuses,
    });

    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

export default getFriends;
