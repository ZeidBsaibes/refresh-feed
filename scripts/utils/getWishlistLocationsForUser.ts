import axios from "axios";

const getWishlistLocationsForUser = async (userId) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/wishlist/${userId}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

export default getWishlistLocationsForUser;
