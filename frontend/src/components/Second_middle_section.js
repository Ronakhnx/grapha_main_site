import React from 'react'
import '../styles/second_middle_section.css'
import s_middle1 from '../assets/s_middle1.jpg';
import s_middle2 from '../assets/s_middle2.jpg';
import s_middle3 from '../assets/s_middle3.jpg';

const Second_middle_section = () => {
  return (
      <center>
        <h2 className='heading_second_middle_section'>we didn't reinvent the wheel. we just design,develop and edit.</h2>
        <div>
            <div className='row'>
                <div className='col-3'>
                    <img src={s_middle1} alt="images"/>
                </div>
                <div className='col-3'>
                    <img src={s_middle2} alt="images"/>
                </div>
                <div className='col-3'>
                    <img src={s_middle3 } alt="images"/>
                </div>
            </div>
        </div>
      </center>
  )
}

export default Second_middle_section