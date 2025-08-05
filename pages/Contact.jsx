// import React from 'react';

// export default function Contact() {
//   return (
//     <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
//       <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
//       <p>Email: <a href="mailto:saransh@example.com" className="text-blue-500">saransh@example.com</a></p>
//       <p>LinkedIn: <a href="https://linkedin.com/in/saransh" className="text-blue-500">linkedin.com/in/saransh</a></p>
//       <p>GitHub: <a href="https://github.com/saransh" className="text-blue-500">github.com/saransh</a></p>
//     </section>
//   );
// }
import '@fortawesome/fontawesome-free/css/all.min.css';


import React, { useState } from 'react';


function Contact(){

  const [showMessage, setShowMessage] = useState(false);
  const [showMessage1, setShowMessage1] = useState(false);

  const handleClick = () => {
  navigator.clipboard.writeText("saranshsharma.dev@gmail.com");

  setShowMessage(true);

  setTimeout(() => {
    setShowMessage(false);
  }, 3000);
};

const handleClick1 = () => {
  navigator.clipboard.writeText(9888636663);

  setShowMessage1(true);

  setTimeout(() => {
    setShowMessage1(false);
  }, 3000);
};





  return(
    <>
    <div id='contact-section' className="contact-container">
      <h1>Get In <span style={{color:"blue"}}>Touch</span></h1>
      <p style={{textAlign: "center", fontSize:"20px"}}>I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.</p>


      <div className="connect-container">

        <div  className="info">
          <p>Let's Connect</p>

          <div className="email-container">
            <img src="" alt="" />
            <div className="email-div">
              <p>Email:</p>
              <p style={{color:"rgba(255, 255, 255, 0.8)"}}>saranshsharma.dev@gmail.com</p>
              
            </div>
            <button className="copy-button copy-btn" onClick={handleClick}>
              <i className="fa-solid fa-copy"></i>
            </button>

            <p style={{ display: showMessage ? 'block' : 'none', color:"white", marginLeft:"10px" }} className='copied-text'>Copied! ✅</p>

          </div>

          <div className="email-container">
            <img src="" alt="" />
            <div className="email-div">
              <p>Phone:</p>
              <p style={{color:"rgba(255, 255, 255, 0.8)"}}>9888636663</p>
            </div>

            <button style={{backgroundColor:"#1a1a1a"}} className="copy-button copy-btn" onClick={handleClick1}>
              <i className="fa-solid fa-copy"></i>
            </button>

            <p style={{ display: showMessage1 ? 'block' : 'none', color:"white", marginLeft:"10px" }} className='copied-text'>Copied! ✅</p>
          </div>

          <div className="email-container">
            <img src="" alt="" />
            <div className="email-div">
              <p>Location:</p>
              <p style={{color:"rgba(255, 255, 255, 0.8)"}}>Chandigarh</p>
            </div>
          </div>

        </div>



        <div className="form">
          <form>
            <p>Name:</p>
              <input type="text" placeholder="Your Name" name="name" required />
              <p>Email:</p>
              <input type="email" placeholder="Your Email" name="email" required />
              <p>Subject:</p>
              <input type="text" placeholder="Subject" name="subject" required />
              <p>Message:</p>
              <textarea style={{display:"block"}} placeholder="Your Message" name="message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;