import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getBlogCatagories = async () => {
  const response = await axios.get(`${base_url}blog-catagory/`);

  return response.data;
};

const blogcatagoryService = {
    getBlogCatagories,
};

export default blogcatagoryService;