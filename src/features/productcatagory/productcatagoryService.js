import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getProductCatagory = async () => {
  const response = await axios.get(`${base_url}product-catagory/`);

  return response.data;
};

const productcatagoryService = {
  getProductCatagory,
};

export default productcatagoryService;
