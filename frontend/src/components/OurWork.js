import React, { useRef, useState } from "react";
import "../styles/our_work.css";
// import web1 from "../assets/web.png";
// import web2 from "../assets/web1.png";
// import web3 from "../assets/web4.png";
// import web4 from "../assets/web3.png";
import project1 from "../assets/project1.png";
import project3 from "../assets/project3.png";

import logo from "../assets/new_logo11.png";
import video1 from "../assets/video1.mp4";
import video11 from "../assets/sujal_1.MOV";
import video22 from "../assets/sujal_2.MOV";
import video2 from "../assets/video2.mp4";

const OurWork = () => {
  const [open, setOpen] = useState(true);

  const open_close = () => {
    setOpen(false);
  };

  return (
    <>
      <div class="top_div">
        <img src={logo} className="logo" />
        <h1 className="main_title">Project</h1>
        <a href="/">Home</a>
      </div>

      <center>
        <div className="project_div">
          <div className="card_div">
            <div class="card">
              <img src={project1} alt="image" />
              <div class="card__content">
                <p class="card__title">Jadoo</p>
                <p class="card__description">
                  Discover the magic of travel with Jadoo, your gateway to
                  unforgettable adventures. We offer expertly curated trips,
                  personalized itineraries, and seamless booking experiences to
                  destinations worldwide. Whether you seek relaxation, cultural
                  immersion, or thrilling escapades, Jadoo is your trusted
                  companion in turning travel dreams into reality.
                </p>
              </div>
            </div>
            <button class="futuristic-btn">
              <span class="btn-text">
                <a href="https://ronakhnx.github.io/karma-master/">View</a>
              </span>
              <span class="btn-glow"></span>
            </button>
          </div>

          <div className="card_div">
            <div class="card">
              <img src={project3} alt="image" />
              <div class="card__content">
                <p class="card__title">Time zone</p>
                <p class="card__description">
                  Where time meets style. Our curated collection of watches
                  blends craftsmanship with contemporary design, offering
                  timepieces for every wrist and occasion. From classic elegance
                  to modern innovation, we provide quality watches that not only
                  tell time but also express your unique personality. Discover
                  your perfect timekeeper at Time zone.
                </p>
              </div>
            </div>
            <button class="futuristic-btn">
              <span class="btn-text">
                <a href="https://ronakhnx.github.io/timezone/">View</a>
              </span>
              <span class="btn-glow"></span>
            </button>
          </div>

          {/* <div className="card_div">
          <div class="card">
            <img
              src={web3}
              alt="image"
            />
            <div class="card__content">
              <p class="card__title">Card Title</p>
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </div>
          <button class="futuristic-btn">
            <span class="btn-text">View</span>
            <span class="btn-glow"></span>
          </button>
        </div>

        <div className="card_div">
          <div class="card">
            <img
              src={web4}
              alt="image"
            />
            <div class="card__content">
              <p class="card__title">Card Title</p>
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </div>
          <button class="futuristic-btn">
            <span class="btn-text">View</span>
            <span class="btn-glow"></span>
          </button>
        </div> */}
        </div>
      </center>
      {open && (
        <center>
          <div class="warning">
            <div class="warning__icon">
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m13 14h-2v-5h2zm0 4h-2v-2h2zm-12 3h22l-11-19z"
                  fill="#393a37"
                ></path>
              </svg>
            </div>
            <div class="warning__title">
              Video might not be smooth or may not be in good quality(Local
              Browser issues) as it was in real for more our worked video please{" "}
              <a href="/contact">Contact</a> us we will sand you more full HD
              videos.
              <br />
              <strong>Note:Watch videos in full screen</strong>
            </div>
            <div class="warning__close">
              <svg
                height="20"
                viewBox="0 0 20 20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                  fill="#393a37"
                  onClick={open_close}
                ></path>
              </svg>
            </div>
          </div>
        </center>
      )}

      <div className="main_video_con">
        <div class="video-card">
          <div class="video-container">
            <video controls>
              <source src={video11} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="card-content">
            {/* <h2>Futuristic Video Title</h2> */}
            <p>
              "Get ready for a visual treat as you trek to Bhrigu Lake, a
              stunning glacial lake in Himachal Pradesh. Capture the vibrant
              colors of the rhododendron forest, the glistening lake waters, and
              the majestic mountain ranges. Let the cinematic beauty of this
              trek leave you awestruck."
            </p>
          </div>
        </div>

        <div class="video-card">
          <div class="video-container">
            <video controls>
              <source src={video22} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="card-content">
            {/* <h2>Futuristic Video Title</h2> */}
            <p>
              "Experience the dynamic beauty of Bhrigu Lake Trek in a condensed
              timelapse video, showcasing the trek's diverse landscapes. From
              lush green meadows to snow-capped peaks, and from glistening lake
              waters to vibrant wildflowers, the video highlights the trek's
              visual splendor. Get ready to be mesmerized by the natural beauty
              of the Himalayas."
            </p>
          </div>
        </div>
      </div>
      <section className="technology_section">
        <div className="tech_row">
          <div className="tech-col"></div>
        </div>
      </section>
    </>
  );
};

export default OurWork;
