import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";

const getProductCatagory = async () => {
  const response = await axios.get(`${base_url}product-catagory/`);

  return response.data;
};

const createProductCategory = async (category) => {
  const response = await axios.post(`${base_url}product-catagory/`, category, config);

  return response.data;
};

const productcatagoryService = {
  getProductCatagory,
  createProductCategory
};

export default productcatagoryService;
