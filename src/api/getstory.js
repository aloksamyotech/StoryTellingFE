import axios from "axios";
import { urls } from "helpers/common";

export const getAllStory = async () => {
    try {
        const data = await axios.get(`${urls.BASE_URL}get-all-post`);
        return data.data
    } catch (error) {
        console.log(error)
    }

};
