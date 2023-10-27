import axios from "axios";
import { urls } from "helpers/common";
export const registerUser = async (authData) => {
  try {
    const data = await axios.post(
      `${urls.BASE_URL}user-registration`,
      authData
    );
  return data.data
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (authData) => {
    try {
      const data = await axios.post(
        `${urls.BASE_URL}user-login`,
        authData
      );
    return data.data
    } catch (error) {
      console.log(error);
    }
  };
