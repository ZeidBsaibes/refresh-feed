import axios from "axios";

const postLocation = async (data) => {
  try {
    const response = await axios.post(`api/add-location`, data);

    return response;
  } catch (error) {
    return console.error(error);
  }
};

export default postLocation;
