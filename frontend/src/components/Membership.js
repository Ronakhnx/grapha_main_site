import React from "react";
import "../styles/membership.css";
import logo2 from "../assets/new_logo22.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'

const Membership = () => {
  const navigate=useNavigate();


  const go_to_contact=()=>{
        alert("please fill the contact form so that we can set a meeting!")
        navigate('/contact')
  }

 

  const blink=()=> {
    var container = document.getElementById("inner_membership_container1");
    var container2 = document.getElementById("inner_membership_container2");

    container.classList.add('blink');
    container2.classList.add('blink');
    setTimeout(() => {
        container.classList.remove('blink');
        container2.classList.remove('blink');
    }, 200);
}
  const standard = () => {
    var buttons = document.getElementsByClassName("btn_1");
    var buttons2 = document.getElementsByClassName("btn_2");

    var standard =document.getElementById("standard")
    var pro =document.getElementById("pro")

    pro.style.transform="translateX(600px)";
    standard.style.transform="translateX(0px)";

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = "#E3DAD2";
      buttons[i].style.color = "#000";
      buttons2[i].style.backgroundColor = "transparent";
      buttons2[i].style.color = "#fff";
    }
    
    blink()
    
};

  const pro=() =>{
    var buttons = document.getElementsByClassName("btn_1");
    var buttons2 = document.getElementsByClassName("btn_2");
  
    var standard =document.getElementById("standard");
    var pro =document.getElementById("pro");

    pro.style.transform="translateX(-600px)";
    standard.style.transform="translateX(600px)";


    for (var i = 0; i < buttons.length; i++) {
      buttons2[i].style.backgroundColor = "#E3DAD2";
      buttons[i].style.color = "#fff";
      buttons[i].style.backgroundColor = "transparent";
      buttons2[i].style.color = "#000";
    } 
    blink()
  };


  return (
    <center id="membership">
      <div className="membership_container">
        <div className="call_container">
          <h1 className="join_title">Join</h1>
          <br />
          <img src={logo2} alt="logo" />
          <div className="detail_container">
            <h1>Book a 10-min intro call</h1>
            <h4>
              Learn more about how Ethos-dev works and how it can help you.{" "}
            </h4>
          </div>
          <button onClick={go_to_contact}>Go</button>
        </div>
        <div className="inner_membership_container" id="inner_membership_container1">
          <div id="standard">
            <h4 className="inner_membership_title">Membership</h4>

            <div className="toggle_button_div">
              <button className="btn_1" onClick={standard}>Standard</button>
              <button className="btn_2" onClick={pro}><FontAwesomeIcon icon={faBolt} size="1x" color="red" />
              Pro</button>
            </div>
            <h1 className="price_title">$999 / m</h1>
            <br />
            <br />
            <center>
            <p className="price_desc">
              One request at a time.cancel membership anytime 
            </p>
            <hr />
            </center>
            <h5 className="question_title">What's included</h5>
            <div className="list_container">
              <center>
                <p>
                  <span className="point">&#9830;</span>One request at a time
                </p>
                <br />
                <p>
                  <span className="point">&#9830;</span>Average 48 hour delivery
                </p>
                <br />
                <p>
                  <span className="point">&#9830;</span>Unlimited UI/UX design
                </p>
                <br />
                <p>
                  <span className="point">&#9830;</span>cancel membership anytime 
                </p>
                <br />
                <p>
                  <span className="point">&#9830;</span>Unlimited Logo design
                </p>
                <br />
              </center>
            </div>
            <div className="btn_div">
              <button className="m_get_start_btn" onClick={go_to_contact}>Get start</button>
              <b>&nbsp;&nbsp;or&nbsp;</b>
              <button className="m_book_call_btn" onClick={go_to_contact}>Book call</button>
            </div>
          </div>

          <div id="pro">
            <h4 className="inner_membership_title" id="inner_membership_container2">Membership</h4>
            <div className="toggle_button_div">
              <button className="btn_1" onClick={standard}>Standard</button>
              <button className="btn_2" onClick={pro}><FontAwesomeIcon icon={faBolt} size="1x" color="red" />
              Pro</button>
            </div>
            <h1 className="price_title">$1599 / m</h1>
            <br />
            <br />
            <p className="price_desc">
              Two request at a time.cancel membership anytime.
            </p>
            <hr />
            <h5 className="question_title">What's included</h5>
            <div className="list_container">
              <center>
                <p>
                  <span className="point">&#9830;</span>Two request at a time
                </p>
                <br />
                <p>
                  <span className="point">&#9830;</span>Average 48 hour delivery
                </p>
                <br />
                <p>
                  <span className="point">&#9830;</span>Unlimited UI/UX design
                </p>
                <br />
                <p>
                  <span className="point">&#9830;</span>cancel membership anytime 
                </p>
                <br />
                <p>
                  <span className="point">&#9830;</span>Unlimited Logo design
                </p>
                <br />
              </center>
            </div>
            <div className="btn_div">
              <button className="m_get_start_btn" onClick={go_to_contact}>Get start</button>
              <b>&nbsp;&nbsp;or&nbsp;</b>
              <button className="m_book_call_btn" onClick={go_to_contact}>Book call</button>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
};

export default Membership;
