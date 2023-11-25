import axios from "axios";
import { API_URL } from "../lib/envBaseURL";

// Fetch data from the API here
const getAllRestaurant = async () => {
  return await axios.get(`${API_URL}/api/restaurants`);
};

export { getAllRestaurant };
