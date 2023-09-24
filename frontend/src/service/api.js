import axios from "axios";

const API_URI = "https://famous-tan-knickers.cyclic.cloud/";

export const uploadFile = async (data) => {
  try {
    const response = await axios.post(
      `https://famous-tan-knickers.cyclic.cloud/upload`,
      data
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error while calling the API ", error.message);
  }
};
