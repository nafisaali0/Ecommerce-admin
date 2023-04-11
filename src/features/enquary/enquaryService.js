import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getEnquaries = async () => {
  const response = await axios.get(`${base_url}enquary/`);

  return response.data;
};

const enquaryService = {
    getEnquaries,
};

export default enquaryService;
