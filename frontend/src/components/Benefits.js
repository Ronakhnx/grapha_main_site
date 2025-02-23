import React from 'react'
import '../styles/benefits.css'
import dashboard from '../assets/dashboard.gif'
import thunder from '../assets/thunder.gif'
import verified from '../assets/verified.gif'
import fingerprint from '../assets/fingerprint.gif'
import cashless_pay from '../assets/cashless-payment.gif'
import analytics from '../assets/analytics.gif'

const Benefits = () => {
  return (
   <center id="benefits">
      <div className='benefit_container'>
        <h1>Membership benefits</h1>
        <br />
        <p>Perks so good you'll never need to go <br />anywhere else for your design , development and edits. Seriously.</p>
      </div>
      <div className='benefit_gifs_container'>
        <div className='inner_benefit_gifs_container'>
            <img src={dashboard} alt='gif_image' style={{mixBlendMode:"multiply"}}/>
            <br />
            <h4>Design & Develop board</h4>
            <br />
            <p>Easily manage your <br />design & development with us.</p>
        </div>
        <div className='inner_benefit_gifs_container'>
            <img src={thunder} alt='gif_image' />
            <br />
            <h4>Lightning fast delivery</h4>
            <br />
            <p>Get your design one at a <br /> time in just a few days on average.</p>
        </div>
        <div className='inner_benefit_gifs_container'>
            <img src={fingerprint} alt='gif_image' />
            <br />
            <h4>Fixed monthly rate</h4>
            <br />
            <p>No surprises here! Pay the same <br />fixed price each month.</p>
        </div>
        <div className='inner_benefit_gifs_container'>
            <img src={verified} alt='gif_image' />
            <br />
            <h4>Top-notch quality</h4>
            <br />
            <p>Insane design quality at your<br /> fingertips whenever you need it.</p>
        </div>
        <div className='inner_benefit_gifs_container'>
            <img src={analytics} alt='gif_image' />
            <br />
            <h4>Flexible and scalable</h4>
            <br />
            <p>Scale up or down as needed,<br />sand pause or cancel at anytime.</p>
        </div>
        <div className='inner_benefit_gifs_container'>
            <img src={cashless_pay} alt='gif_image' />
            <br />
            <h4>Unique and all yours</h4>
            <br />
            <p>Each of your designs is made<br /> especially for you and is 100% yours.</p>
        </div>
        </div>    
   </center>
  )
}

export default Benefits