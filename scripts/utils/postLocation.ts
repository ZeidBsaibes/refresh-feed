import axios from "axios";

const postLocation = async (data) => {
  try {
    const response = await axios.post(`api/add-location`, data);
    console.log(data);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

export default postLocation;