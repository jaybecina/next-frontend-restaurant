import axios from "axios";
import { BASE_URL } from "../lib/envBaseURL";

// Fetch data from the API here
const getAllRestaurant = async () => {
  return await axios.get(`${BASE_URL}/api/restaurants`);
};

export { getAllRestaurant };
