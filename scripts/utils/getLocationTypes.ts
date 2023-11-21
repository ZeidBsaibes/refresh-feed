import axios from "axios";

const getLocationTypes = async () => {
  try {
    const response =
      await axios.get(`http://localhost:3000/api/get-location-types
    `);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

export default getLocationTypes;
