import React from "react";
import "../styles/plans.css";
import price_side_img from "../assets/price_side_img.png";
import { useNavigate } from "react-router-dom";

const Plans = () => {
  const navigate = useNavigate();

  const go_to_contact = () => {
    alert("please fill the contact form so that we can set a meeting!");
    navigate("/contact");
  };

  return (
    <center id="pricing">
      <div className="plans_heading_div">
        <h2 className="plans_heading">Plans to check out</h2>
        <hr />
      </div>
      <section className="price_section_container">
        <img
          src={price_side_img}
          className="price_side_img"
          alt="price side img"
        />

        <div className="plans_row">
          <div className="plans_col_3">
            <h1 className="plans_card_heading">Individual plan</h1>
            <div class="animation-container">
              <div class="cube1">
                <div class="cube1-face"></div>
                <div class="cube1-face"></div>
                <div class="cube1-face"></div>
                <div class="cube1-face"></div>
                <div class="cube1-face"></div>
                <div class="cube1-face"></div>
              </div>
            </div>
            <br />
            <div className="price">
              <p>
                <li></li>Single Logo design{" "}
                <strong>
                  between <br /> 9$-29.99$
                </strong>
              </p>
              <p>
                <li></li>Single Product design{" "}
                <strong>
                  between <br /> 79$-329.99$
                </strong>
              </p>
              <p>
                <li></li>Single Website design{" "}
                <strong>
                  between <br /> 89$-499$
                </strong>
              </p>
              <p>
                <li></li>Single Application design{" "}
                <strong>
                  between <br /> 89$-499$
                </strong>
              </p>
            </div>
            <button onClick={go_to_contact}>Get started</button>
          </div>
          <div className="plans_col_3">
            <h1 className="plans_card_heading">Video Editing</h1>
            <div class="animation-container">
              <div class="cube1">
                <div class="cube1-face"></div>
                <div class="cube1-face"></div>
                <div class="cube1-face"></div>
                <div class="cube1-face"></div>
                <div class="cube1-face"></div>
                <div class="cube1-face"></div>
              </div>
            </div>
            <br />
            <div className="price">
              <p>
                <strong>
                  <li></li>9.99 $ / 15 sec
                </strong>
              </p>
              <p>
                <strong>
                  <li></li>19.99 $ / 30 sec
                </strong>
              </p>
              <p>
                <strong>
                  <li></li>49.99 $ / 1 min <br />
                  (longer video takes more time)
                </strong>
              </p>
              <p>
                <strong>
                  <li></li>for more longer video <br />
                  editing book call{" "}
                </strong>
              </p>
            </div>
            <button onClick={go_to_contact}>Get started</button>
          </div>
          <div className="plans_col_3">
            <h1 className="plans_card_heading">Web-development</h1>
            <div class="animation-container">
              <div class="cube1">
                <div class="cube1-face"></div>
                <div class="cube1-face"></div>
                <div class="cube1-face"></div>
                <div class="cube1-face"></div>
                <div class="cube1-face"></div>
                <div class="cube1-face"></div>
              </div>
            </div>
            <br />
            <div className="price">
              <p>
                <li></li>
                <strong>
                  price maybe varied depends on the website you need it could
                  less or more.
                </strong>
              </p>
              <br />
              <p>
                <li></li>
                <strong>
                  web development using latest technologies at affordable price.
                </strong>
              </p>
            </div>
            <button onClick={go_to_contact}>Get started</button>
          </div>
        </div>
      </section>
    </center>
  );
};

export default Plans;
