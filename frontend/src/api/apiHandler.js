import axios from "axios";

const postRequestHandler = async (ApiUrl, data) => {
  const response = await axios
    .post(ApiUrl, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

const getRequestHandler = async (ApiUrl) => {
  const response = await axios
    .get(ApiUrl)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};
export { postRequestHandler, getRequestHandler };
