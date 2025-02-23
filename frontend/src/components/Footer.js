import React from 'react'
import '../styles/footer.css'
import new_logo from '../assets/new_logo22.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin ,faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <div className='footer_container'>
        <div className='logo_container'>
            <img src={new_logo} alt='logo' />
        </div>
        <div className='link_section_container'>
            <ul>
                <li><a href="/how_it_is_work">How it works</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#benefits">Benefits</a></li>
                <li><a href="/how_it_is_work">Services</a></li>
                <li><a href="#">login</a></li>
            </ul>
        </div>
        <div className='useful_link_container'>
            <h4>Useful links</h4>
            <ul>
                <li><a href="#form">Contact us</a></li>
                <li><a href="/aboutUs">About us</a></li>
                <li><a href="#membership">Plans</a></li>
                <li><a href="/how_it_is_work">How It Works</a></li>
                <li><a href="/terms_condition">Terms & conditions</a></li>
            </ul>
        </div>
        <div className='social_link_container'>
        <h4>social media links</h4>
        <center>
        <ul>
                <li><a href="https://www.instagram.com/grapha.co/"><FontAwesomeIcon icon={faInstagram} size="2x" className='instagram'/></a></li>
                <li><a href="https://www.linkedin.com/in/grapha-company-64b711319/"><FontAwesomeIcon icon={faLinkedin} size="2x"  className="linkedin" /></a></li>
                <li><a href="https://x.com/Grapha_co"><FontAwesomeIcon icon={faSquareXTwitter}  size="2x"  className="X_twitter" /></a></li>
                <li><a href="mailto:agencygrapha@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x"  className="email"/></a></li>
            </ul>
            </center>
        </div>
    </div>
  )
}

export default Footer