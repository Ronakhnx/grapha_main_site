import { postRequestHandler } from "./apiHandler";
import { UrlData } from "./apiUrl";

const contactFormHandler = async (data) => {
  const response = await postRequestHandler(
    UrlData.BASE_URL + UrlData.CONTACT,
    data
  );
  return response;
};

export { contactFormHandler };
