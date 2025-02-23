import React from 'react'
import '../styles/middle_section.css';
import middle1 from '../assets/middle1.jpg';
import middle2 from '../assets/middle2.jpg';
import middle3 from '../assets/middle3.jpg';


const Middle_section = () => {
  return (
      <center>
      {/* <center></center> */}
       <div className='middle_container'>
            <div>
              <div class="card1">
                <img src={middle1} alt='image'/>
              </div>
            </div>
            <div>
            <div class="card1">
                <img src={middle2} alt='image'/>
              </div>
            </div>
            <div>
            <div class="card1">
                <img src={middle3} alt='image'/>
              </div>
            </div>
       </div>
       <button class="get-started">
          <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
          </span>
          <a href='/how_it_is_work'><span class="button-text">Our Services</span></a>
      </button>      
      </center>
  )
}

export default Middle_section