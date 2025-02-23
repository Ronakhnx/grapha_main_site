import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ContactForm } from "../models/contactForm.model.js";
import { ApiError } from "../utils/ApiError.js";
import { mailService, mailServiceToGrapha } from "../utils/email.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getContactFormDetails = asyncHandler(async (req, res) => {
  const { name, email, message, mobileNo, title, country } = req.body;
  console.log(req.body);
  const contactForm = await ContactForm.create({
    title: title,
    name: name,
    email: email,
    message: message,
    mobileNo: mobileNo,
    country: country,
  });

  if (!contactForm) {
    throw new ApiError(400, "Failed to submit details !");
  }

  const maildata = {
    to: email,
    subject: title,
    name: name,
  };

  const leadData = {
    to: "vasuvirani55@gmail.com",
    subject: "New request recieved from Grapha",
    name: name,
    email: email,
    message: message,
    mobileNo: mobileNo,
    title: title,
    // country:country,
  };

  await mailService(maildata);
  await mailServiceToGrapha(leadData);

    res
    .status(200)
    .json(new ApiResponse(200,contactForm ,"Contact form submitted successfully!"));
});

export { getContactFormDetails };
