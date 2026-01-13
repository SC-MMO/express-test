import axios from "axios";
const callAPI = async (method: string, endpoint: string, data?: any) => {
  const response = await axios({
    method: method,
    url: `http://10.12.19.19:3000/api/${endpoint}`,
    data: data,
  });
  return response;
};

export { callAPI };
