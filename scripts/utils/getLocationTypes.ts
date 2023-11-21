import axios from "axios";

const getLocationTypes = async () => {
  try {
    const response =
      await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/get-location-types
    `);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

export default getLocationTypes;
