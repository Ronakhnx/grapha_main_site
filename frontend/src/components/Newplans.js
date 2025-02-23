import React from "react";
import "../styles/newplans.css";
import { useNavigate } from "react-router-dom";


const Newplans = () => {

  const navigate = useNavigate();

  const go_to_contact = () => {
    alert("Please fill the contact form so that we can set a meeting!");
    navigate("/contact");
  };

  return (
    <center>
      <div className="plans_heading_div_new">
        <h2 className="plans_heading_new">Plans to check out</h2>
        <hr />
      </div>
      <div className="pricing-container">
        {/* Individual Plan Card */}
        <div className="pricing-card">
          <h2 className="card-title">Individual plan</h2>
          <p className="card-description">
            Provides you with the most freedom. Perfect for testing out the
            plan.
          </p>
          <div className="price">$*,**</div>
          <div className="billing-period">Billed Per project<br /><span>($*,** as per complexity.)</span></div>
          <button className="cta-button"  onClick={go_to_contact}>Get started →</button>
          <h3 className="features-title">What's included</h3>
          <ul className="features-list">
            <li className="feature-item">Logo design</li>
            <li className="feature-item">Product design</li>
            <li className="feature-item">Website design</li>
            <li className="feature-item">Application design</li>
            {/* <li className="feature-item">Slack/Trello channel</li> */}
          </ul>
        </div>
        {/* Video Editing Card */}
        <div className="pricing-card featured">
          <h2 className="card-title">Video editing</h2>
          <p className="card-description">
            Best plan for video contents and editing.
            <br />
            <span><strong>Individual plan</strong> are also available for that contact us(by filling form.)</span>
          </p>
          <div className="price">$1,530</div>
          <div className="billing-period">Billed monthly</div>
          <button className="cta-button"  onClick={go_to_contact}>Get started →</button>
          <h3 className="features-title">What's included</h3>
          <ul className="features-list">
            <li className="feature-item">15 sec video</li>
            <li className="feature-item">30 sec video</li>
            <li className="feature-item">&gt; 1 min video</li>
            <li className="feature-item">Dedicated video editor</li>
            {/* <li className="feature-item">Slack/Trello channel</li> */}
          </ul>
        </div>
        {/* Web Development Card */}
        <div className="pricing-card featured">
          <h2 className="card-title">Web development</h2>
          <p className="card-description">
            Best plan for full pledged website development
          </p>
          <div className="price">$*,**</div>
          <div className="billing-period">Billed Per project<br /><span>($*,** as per complexity.)</span></div>
          <button className="cta-button"  onClick={go_to_contact}>Get started →</button>
          <h3 className="features-title">What's included</h3>
          <ul className="features-list">
            <li className="feature-item">Unlimited revisions</li>
            <li className="feature-item">Unlimited development</li>
            <li className="feature-item">Unlimited brands</li>
            <li className="feature-item">Dedicated designer and developer</li>
            {/* <li className="feature-item">Slack/Trello channel</li> */}
          </ul>
        </div>
      </div>
    </center>
  );
};

export default Newplans;
