import axios from "axios";

const approveFriend = async (friendshipId, status) => {
  try {
    const response = await axios.patch("/api/friends/update", {
      friendshipId,
      status,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

export default approveFriend;
