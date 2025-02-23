import React from "react";
import "../styles/how_it_is_work.css";
import logo from "../assets/new_logo11.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import Accordion from "./Accordion";

const HowItIsWork = () => {
  return (
    <>
    <div>
      <div class="top_div">
        <img src={logo} className="logo" />
        <h1 className="main_title">How It Is Work...?</h1>
        <a href="/">Home</a>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="#000000">
                <path d="M22 4H2c-.6 0-1 .4-1 1v14c0 .4.3.8.6.9.1.1.3.1.4.1h20c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1zM8 5h8c.5 0 1 .5 1 1s-.5 1-1 1H8c-.5 0-1-.5-1-1s.5-1 1-1zM3 5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm19 13c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v9zM21 7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM10.5 12h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5s-.2.5-.5.5zM10.5 14h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5s-.2.5-.5.5zM10.5 16h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5s-.2.5-.5.5z"></path>
                <circle cx="16.5" cy="13.5" r="2.5"></circle>
              </g>
            </svg>
          </div>
          <br />
          <h2>Modern UI/UX Design</h2>
          <br />
          <p>
            we transform your idea into reality that full fill your need.our
            skilled designer.We craft exceptional digital experiences through
            user-centric UI/UX and product design. Our collaborative process
            blends aesthetics and functionality, ensuring intuitive interfaces
            and seamless interactions that resonate with users and elevate your
            brand.
          </p>
        </div>
        <div className="col-6">
          <div className="svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="#000000">
                <path d="M23 17l-4-1c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2l-4 1c0 1 1 2 2 2h18c1 0 2-1 2-2zM5.3 15c-.7 0-1.3-.6-1.3-1.3V7.3C4 6.6 4.6 6 5.3 6h13.4c.7 0 1.3.6 1.3 1.3v6.5c0 .7-.6 1.3-1.3 1.3H5.3z"></path>
              </g>
            </svg>
          </div>
          <br />
          <h2>Website / software development</h2>
          <br />
          <p>
            Elevate your online presence with our cutting-edge website
            development services. We create visually stunning, fully responsive
            websites optimized for speed, security, and scalability. From custom
            CMSs to e-commerce platforms, our tailored solutions drive
            conversions and growth.
          </p>
        </div>
        <div className="col-6">
          <div className="svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="#000000">
                <path d="M12 2C4 2 .5 9.5 3 12s5.1.1 7 2c2 2 0 5 2 7s10-1 10-9c0-6-5-10-10-10zm-5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm2-6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
              </g>
            </svg>
          </div>
          <br />
          <h2>Logo Design</h2>
          <br />
          <p>
            Elevate your brand identity with our strategic logo design services.
            Our skilled designers create visually compelling logos that capture
            your brand's essence, resonate with your target audience, and
            establish a memorable presence across all touchpoints.
          </p>
        </div>
        <div className="col-6">
          <div className="svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="#000000">
                <path d="M17 8c0-2.8-2.2-5-5-5S7 5.2 7 8H4v11c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h-3zm-5-4c2.2 0 4 1.8 4 4H8c0-2.2 1.8-4 4-4z"></path>
              </g>
            </svg>
          </div>
          <br />
          <h2>Product design</h2>
          <br />
          <p>
            we transform your idea into reality that full fill your need with
            our skilled designer.We craft attractive digital product design. Our
            collaborative process blends aesthetics, as per our clients need.
          </p>
        </div>
        <div className="col-6">
          <div className="svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="#000000">
                <path d="M22 4H2c-.6 0-1 .4-1 1v14c0 .4.3.8.6.9.1.1.3.1.4.1h20c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1zM8 5h8c.5 0 1 .5 1 1s-.5 1-1 1H8c-.5 0-1-.5-1-1s.5-1 1-1zM3 5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm19 13c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v9zM21 7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM10.5 12h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5s-.2.5-.5.5zM10.5 14h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5s-.2.5-.5.5zM10.5 16h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5s-.2.5-.5.5z"></path>
                <circle cx="16.5" cy="13.5" r="2.5"></circle>
              </g>
            </svg>
          </div>
          <br />
          <h2>Video Editing</h2>
          <br />
          <p>
            Tell captivating stories through our expert video editing services.
            Our skilled editors meticulously craft visuals and audio into
            compelling narratives. From normal videos to social media content,
            we bring your vision to life with precision and
            creativity.ex-YouTube video editing,instagram reel editing and more.
          </p>
        </div>
        <div className="col-6">
          <div className="svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="#000000">
                <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm1 20H6V3h12v18z"></path>
                <circle cx="12" cy="19" r="1"></circle>
              </g>
            </svg>
          </div>
          <br />
          <h2>Social Media Page /Poster design</h2>
          <br />
          <p>
            Amplify your brand's reach with our engaging social media page and
            poster designs. Our creative team crafts visually striking and
            on-brand content that captures attention, resonates with your
            audience, and drives engagement across various social platforms.
          </p>
        </div>
      </div>
      <div className="title_div">
        <h1>
          <FontAwesomeIcon icon={faPerson} />
          &nbsp;Commonly asked questions&nbsp;
          <FontAwesomeIcon icon={faPersonCircleQuestion} color="#00000" />
        </h1>
        <center>
          {/* <section className="q_a_section">
            <h4 className="question">
              <span className="sign">&#11212;&nbsp;</span>
              <u>How fast will I receive my designs?</u>
            </h4>
            <h5 className="answer">
              <span className="sign">&#11162;&nbsp;</span>On average, most
              requests are completed in just two days or less.
              <br />
              However, more complex requests can take longer.
            </h5>
            <h4 className="question">
              <span className="sign">&#11212;&nbsp;</span>
              <u>Who are the designers?</u>
            </h4>
            <h5 className="answer">
              <span className="sign">&#11162;&nbsp;</span>You might be surprised
              to hear this, but Grapha is actually an agency of one. This means
              you'll work directly with me, founder of Grapha.
              <br /> However, power-ups requests such as animations or custom
              illustrations are provided by partner designers.
            </h5>

            <h4 className="question">
              <span className="sign">&#11212;&nbsp;</span>
              <u>What programs do you design in?</u>
            </h4>
            <h5 className="answer">
              <span className="sign">&#11162;&nbsp;</span>Most requests are
              designed using Figma.
            </h5>

            <h4 className="question">
              <span className="sign">&#11212;&nbsp;</span>
              <u>Is there any design work you don't cover?</u>
            </h4>
            <h5 className="answer">
              <span className="sign">&#11162;&nbsp;</span>Absolutely. Grapha
              does not cover the following design work: 3D modeling, animated
              graphics (GIFS, etc.), <br />
              document design (medical forms, etc.), complex packaging, and
              extensive print design (magazines, books, etc.).
            </h5>

            <h4 className="question">
              <span className="sign">&#11212;&nbsp;</span>
              <u>Are there any refunds if I don't like the service?</u>
            </h4>
            <h5 className="answer">
              <span className="sign">&#11162;&nbsp;</span>Due to the high
              quality nature of the work, there will be no refunds issued. but
              there is cancelation policies in which you can get some amount
              cancel in 48 hours - we take <u>499$</u> cancel within 7 days - we
              take <u>799$</u> and rest is yours.
            </h5>

            <h4 className="question">
              <span className="sign">&#11212;&nbsp;</span>
              <u>Is there a limit to how many requests I can have?</u>
            </h4>
            <h5 className="answer">
              <span className="sign">&#11162;&nbsp;</span>Once subscribed,
              you're able to add as many design requests to your queue as you'd
              like, and they will be delivered one by one.
            </h5> */}

            {/* <h4 className='question'><span className='sign'>&#11212;&nbsp;</span>How does the pause feature work?</h4>
        <h5 className='answer'><span className='sign'>&#11162;&nbsp;</span>We understand you may not have enough design work to fill up entire month. Perhaps you only have one or two design requests at the moment. That's where pausing your subscription comes in handy.
        <br />
        Billing cycles are based on 30 day period. Let's say you sign up and use the service for 21 days, and then decide to pause your subscription. This means that the billing cycle will be paused and you'll have 10 days of service remaining to be used anytime in the future.</h5> */}
          {/* </section> */}
        </center>
      </div>
     
      <footer>
        <center>
          <img src={logo} className="logo_footer" />
        </center>
        {/* <Footer /> */}
      </footer>
    </div>
     <div className="aco_Div">   
     <Accordion />
     </div>
     </>
  );
};

export default HowItIsWork;
