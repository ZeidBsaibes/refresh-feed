import axios from "axios";

const getLocation = async (locationId) => {
  try {
    const response = await axios.get(`/api/location/${locationId}`);
    console.log(response.data);

    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

export default getLocation;
