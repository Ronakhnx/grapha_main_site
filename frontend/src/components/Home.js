import React from 'react'
import '../styles/home.css'
import Navbar from './Navbar';
import Landing_page from './Landing_page';
import Middle_section from './Middle_section';
import Second_middle_section from './Second_middle_section';
import Plans from './Plans';
import Membership from './Membership';
import Benefits from './Benefits';
import Footer from './Footer';
import Form from './Form';
import Technolgy from './Technolgy';
import Newplans from './Newplans';

const Home = () => {
  return (
    <>
       <Navbar />
            <div className='block'><Landing_page /></div>   
            <div className='block'><Middle_section /></div>       
            <div className='block'><Second_middle_section /></div>       
            {/* <div className='block'><Plans /></div>  */}
            <div className='block'><Newplans /></div>          
            <div className='block'><Membership /></div>       
            <div className=''><Benefits /></div>  
            <div className='block'><Technolgy /></div>  
            <div className='block'><Form /></div>       
       <Footer />
    </>
  )
}

export default Home