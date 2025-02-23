import React, { useState } from "react";
import { contactFormHandler } from "../api/index";
import "../styles/form.css";
import contact_image from "../assets/contact33.jpg";
const Form = () => {
  //const [selectedCountry, setSelectedCountry] = useState("");

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Côte d'Ivoire",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Holy See",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine State",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const [contactData, setContactData] = useState({});
  const onHandleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const submitContctformHandler = async () => {
  const response=await contactFormHandler(contactData);
  console.log(response,"response")
    if (response.data.statusCode=== 200) {
      alert("Form submitted successfully!");
      setContactData({});
    }
  };
  return (
    <center>
      <div className="form-container" id="form">
        <h2 className="contact_title">Contact Us</h2>
        <div className="form_container2">
          <img src={contact_image} alt="contact" />
          <form>
            <div className="form-group">
              <label htmlFor="title">Topic Name</label>
              <br />
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter which service you want"
                onChange={onHandleChange}
                value={contactData?.title}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                onChange={onHandleChange}
                value={contactData?.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="number">Contact-no</label>
              <br />
              <input
                type="number"
                id="number"
                name="mobileNo"
                placeholder="Enter your contact"
                onChange={onHandleChange}
                value={contactData?.mobileNo}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={onHandleChange}
                value={contactData?.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your self or your company"
                onChange={onHandleChange}
                value={contactData?.message}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="country">Country: </label>
              <br />
              <select
                className="option"
                id="country"
                name="country"
                value={contactData?.country}
                onChange={onHandleChange}
              >
                <option value="">Select a country / Search country </option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              className="submit_btn"
              onClick={submitContctformHandler}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </center>
  );
};

export default Form;
