import axios from "axios";

const API_URI = process.env.BASE_URL;

export const uploadFile = async (data) => {
  try {
    const response = await axios.post(`/upload`, data);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log("Error while calling the API ", error.message);
  }
};
