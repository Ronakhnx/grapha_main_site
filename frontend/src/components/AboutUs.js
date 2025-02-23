import React from 'react'
import '../styles/aboutus.css'
import logo from '../assets/new_logo11.png'

const AboutUs = () => {
  return (
    <>
    <center className='aboutus_container'>
        <div class="top_div">
        <img src={logo} className='logo'/>
        <h1 className='main_title'>How It Is Work...?</h1>
        <a href="/">Home</a>
        </div>
        <p className='text_container'>
            “Welcome to our agency! We specialize in a range of creative services that elevate your brand and online presence. Our talented team of web designers crafts bespoke websites tailored to your unique vision. Whether you need a stunning e-commerce platform, a sleek portfolio site, or an engaging blog, we’ve got you covered. Beyond web design, we excel in video editing, transforming raw footage into captivating content. Our graphic designers create eye-catching visuals that resonate with your audience. At our agency, we’re passionate about turning ideas into reality, one pixel at a time.”
        </p>
    </center>
    <footer>
        <center>
            <img src={logo}  className='logo_footer'/>
        </center>
    </footer>
    </>
  )
}

export default AboutUs