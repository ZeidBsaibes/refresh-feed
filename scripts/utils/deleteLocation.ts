import axios from "axios";

const deleteLocation = async (locationId, userId) => {
  try {
    const response = await axios.delete(`/api/location/${locationId}`, {});

    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

export default deleteLocation;
