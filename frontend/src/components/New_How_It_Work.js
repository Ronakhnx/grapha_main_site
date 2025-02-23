import React,{useState} from "react";
import '../styles/second.css'
import Navbar from "./Navbar";

const Accordion = () => {
  // State to track which accordion items are open
  const [activeItems, setActiveItems] = useState({});

  // FAQ data
  const faqData = [
    {
      id: 1,
      header: "How fast will I receive my designs?",
      content: "On average, most requests are completed in just two days or less.However, more complex requests can take longer."
    },
    {
      id: 2,
      header: " Who are the designers?",
      content: "You might be surprised to hear this, but Grapha is actually an agency of one. This means you'll work directly with me, founder of Grapha.However, power-ups requests such as animations or custom illustrations are provided by partner designers."
    },
    {
      id: 3,
      header: "What programs do you design in?",
      content: " Most requests are designed using Figma."
    },
    {
      id: 4,
      header: " Is there any design work you don't cover?",
      content: " Absolutely. Grapha does not cover the following design work: 3D modeling, animated graphics (GIFS, etc.),document design (medical forms, etc.), complex packaging, and extensive print design (magazines, books, etc.)."
    },
    {
      id: 5,
      header: " Are there any refunds if I don't like the service?",
      content: "Due to the high quality nature of the work, there will be no refunds issued. but there is cancelation policies in which you can get some amount cancel in 48 hours - we take 499$ cancel within 7 days - we take 799$ and rest is yours."
    },
    {
      id: 6,
      header: " Is there a limit to how many requests I can have?",
      content: " Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one."
    }
  ];

  // Toggle function for accordion items
  const toggleAccordion = (id) => {
    setActiveItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="faq-section">
      <h2>Commonly asked questions</h2>
      <div className="accordion">
        {faqData.map((item) => (
          <div 
            key={item.id}
            className={`accordion-item ${activeItems[item.id] ? 'active' : ''}`}
          >
            <div 
              className="accordion-header"
              onClick={() => toggleAccordion(item.id)}
            >
              {item.header}
            </div>
            <div className="accordion-content">
              <div className="accordion-content-inner">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const New_How_It_Work = () => {
  

  return (
    <>
      <Navbar />
      <hr className="hr_line"/>
      <h1 className="page-title">How It Is Work...?</h1>
      <div className="services-grid">
        <div className="service-card">
          <svg className="service-icon" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"
            />
          </svg>
          <h3 className="service-title">Modern UI/UX Design</h3>
          <p className="service-description">
            We transform your idea into reality that full fill your need. Our
            skilled designer. We craft exceptional digital experiences through
            user-centric UI/UX and product design. Our collaborative process
            blends aesthetics and functionality, ensuring intuitive interfaces
            and seamless interactions that resonate with users and elevate your
            brand.
          </p>
        </div>
        <div className="service-card">
          <svg className="service-icon" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z"
            />
          </svg>
          <h3 className="service-title">Website / software development</h3>
          <p className="service-description">
            Elevate your online presence with our cutting-edge website
            development services. We create visually stunning, fully responsive
            websites optimized for speed, security, and scalability. From custom
            CMSs to e-commerce platforms, our tailored solutions drive
            conversions and growth.
          </p>
        </div>
        <div className="service-card">
          <svg className="service-icon" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            />
          </svg>
          <h3 className="service-title">Logo Design</h3>
          <p className="service-description">
            Elevate your brand identity with our strategic logo design services.
            Our skilled designers create visually compelling logos that capture
            your brand's essence, resonate with your target audience, and
            establish a memorable presence across all touchpoints.
          </p>
        </div>
        <div className="service-card">
          <svg className="service-icon" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19 6h-4V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2h2v2h-2V4zM5 8h14v12H5V8z"
            />
          </svg>
          <h3 className="service-title">Product design</h3>
          <p className="service-description">
            We transform your idea into reality that full fill your need with
            our skilled designer. We craft attractive digital product design.
            Our collaborative process blends aesthetics, as per our clients
            need.
          </p>
        </div>
        <div className="service-card">
          <svg className="service-icon" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"
            />
          </svg>
          <h3 className="service-title">Video Editing</h3>
          <p className="service-description">
            Tell captivating stories through our expert video editing services.
            Our skilled editors meticulously craft visuals and audio into
            compelling narratives. From normal videos to social media content,
            we bring your vision to life with precision and creativity.
          </p>
        </div>
        <div className="service-card">
          <svg className="service-icon" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"
            />
          </svg>
          <h3 className="service-title">Social Media Page/Poster design</h3>
          <p className="service-description">
            Amplify your brand's reach with our engaging social media page and
            poster designs. Our creative team crafts visually striking and
            on-brand content that captures attention, resonates with your
            audience, and drives engagement across various social platforms.
          </p>
        </div>
      </div>
      <div className="faq-section">
        <Accordion />
      </div>
    </>
  );
};

export default New_How_It_Work;
