import React, { useState, useEffect } from 'react';import "./contactme.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { InfinitySpin } from 'react-loader-spinner'
import { faL } from '@fortawesome/free-solid-svg-icons';

const ContactMe = (props) => {
  const form = useRef();

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setShowLoading(false);
    }, 2000); 

    return () => clearTimeout(animationTimeout);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_98bgc7i",
        "template_5md79ni",
        form.current,
        "JYcvsFUR-CgAhIzTP"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (


    
    <>

{showLoading && <div className="loading-animation">      <InfinitySpin color="orange"  />
</div>}
      {!showLoading && (
            <div className="contact-me-wrapper">
            <div className="contact-me-text">
              Be it about a new opportunity, suggestions for this Application or
              just a friendly chat, Feel free to reach out.
              <br /> I like socializing
            </div>
            <div className="contact-form">
              <form className="contact-form-tag" ref={form} onSubmit={sendEmail}>
                <input
                  placeholder="Your Name"
                  type="text"
                  name="from_name"
                  required
                />
    
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
                <input
                  placeholder="Your Email ID"
                  type="email"
                  name="from_email"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  name="message"
                  required
                ></textarea>
                <button type="submit" value="SEND">SEND</button>
    
                
              </form>
            </div>
          </div>
      )}
{/* <div>
      {showAnimation && <div className="animation">Your Animation Goes Here</div>}
      {redirectTo && <Redirect to="/your-destination" />}
    </div> */}


      {/* <div className="contact-me-wrapper">
        <div className="contact-me-text">
          Be it about a new opportunity, suggestions for this Application or
          just a friendly chat, Feel free to reach out.
          <br /> I like socializing
        </div>
        <div className="contact-form">
          <form className="contact-form-tag" ref={form} onSubmit={sendEmail}>
            <input
              placeholder="Your Name"
              type="text"
              name="from_name"
              required
            />

            <input
              placeholder="What is it regarding"
              type="text"
              name="subject"
              required
            />
            <input
              placeholder="Your Email"
              type="email"
              name="from_email"
              required
            />
            <textarea
              placeholder="Your Message"
              name="message"
              required
            ></textarea>
            <button type="submit" value="SEND">SEND</button>

            
          </form>
        </div>
      </div> */}
      {/* <MutatingDots color="orange" secondaryColor="orange" /> */}

    </>
  );
};

export default ContactMe;
