import React from 'react'
import '../styles/landing_page.css';
import side_img from '../assets/landing_page_side_image.png';
import text_up_img from '../assets/text_up_img.png';


const Landing_page = () => {
  return (
    <>
       <div className='landing_page_container'>
         <div className='side_img_container'>
            <img src={side_img} alt='side image'/>
         </div>
         <div className='side_text_container'>
            <h1>A great<span><img src={text_up_img} className='text_up_img'/></span><br /> digital agency</h1>
            <p>"Crafting Captivating Experiences:Where  <br /> Design Meets Innovation."</p>
              <br />
              <br />
          
         </div>
          <br />
       </div>
     
       {/* <div class="marquee-container">
            <div class="marquee-content">
                <span>Web development</span> <span>Web design</span> <span>App design</span> <span>landing page design</span> <span>product design</span> <span>logo design</span><span>Video editing</span> 
            </div>
        </div> */}
        <div class="marquee-container">
            <div class="marquee-content">
                <div class="marquee-item">
                <span>Web development</span> <span>Web design</span> <span>App design</span> <span>landing page design</span> <span>product design</span> <span>logo design</span><span>Video editing</span> 
                </div>
                {/* <div class="marquee-item">
                <span>Web development</span> <span>Web design</span> <span>App design</span> <span>landing page design</span> <span>product design</span> <span>logo design</span><span>Video editing</span> 
                </div> */}
            </div>
        </div>
    </>
  )
}

export default Landing_page
