import React from 'react'
import '../styles/NewOurWork.css'
import Navbar from './Navbar'
import video11 from "../assets/sujal_1.MOV";
import video22 from "../assets/sujal_2.MOV";
import { redirect } from 'react-router-dom';
import project1 from "../assets/project1.png";
import project3 from "../assets/project3.png";

const NewOurWork = () => {

    // const redirect1=()=>{
        
    // }
  return (
    <>
    {/* <header className="header">
      <h1 className="logo">Grapha</h1>
      <nav>
        <a href="#home">Home</a>
      </nav>
    </header> */}
    <Navbar />
    <section className="hero">
      <h1>Welcome to Our Projects</h1>
      <p>
        Explore stunning designs and visual experiences. Tailored just for you.
      </p>
      <a href="#projects" className="btn">
        Discover More
      </a>
    </section>
    <section className="projects" id="projects">
      <h2>Our Featured Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <img src={project1} alt="Jadoo Project" />
          <h3>Jadoo</h3>
          <p>
            Travel, enjoy, and live a new and full life. Discover the best
            destinations worldwide.
          </p>
          <button className="btn"><a href="https://ronakhnx.github.io/karma-master/" target='_blank'>View</a></button>
        </div>
        <div className="project-card">
          <img
            src={project3}
            alt="Time Zone Project"
          />
          <h3>Time Zone</h3>
          <p>
            Find your perfect style with our exquisite collection of timepieces.
          </p>
          <button className="btn"><a href="https://ronakhnx.github.io/timezone/" target='_blank'>View</a></button>
        </div>
      </div>
    </section>
    <section className="videos" id="videos">
      <h2>Project Highlights</h2>
      <div className="video-grid">
        <div className="video-card">
          <video controls>
            <source src={video11} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Experience the stunning visuals of Bhrigu Lake Trek.</p>
        </div>
        <div className="video-card">
          <video controls>
            <source src={video22} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Immerse yourself in the lush greenery of Himachal Pradesh.</p>
        </div>
      </div>
    </section>
    <center><span><strong>Note:</strong>For more our worked videos and projects please contact us through filling the form.</span></center>
    <footer>
      <p>© 2024 GRAPHA. All rights reserved.</p>
    </footer>
  </>
  
  )
}

export default NewOurWork