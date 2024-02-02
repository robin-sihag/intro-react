import React, { useState, useEffect } from "react";
import "./contactme.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { InfinitySpin } from "react-loader-spinner";

const ContactMe = (props) => {
  const form = useRef();

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setShowLoading(false);
    }, 1000);

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
      {showLoading && (
        <div className="loading-animation">
          <InfinitySpin color="orange" />
        </div>
      )}
      {!showLoading && (
        <div className="contact-me-wrapper">
          <div className="contact-me-text">
            Be it about a new opportunity, suggestions for this Application or
            just a friendly chat, Feel free to reach out.
            <br /> I like socializing
          </div>
          <div className="contact-form">
            <form className="contact-form-tag" ref={form} onSubmit={sendEmail}>
              <div className="form-row">
                <label>
                  <input
                    placeholder="Your Name"
                    type="text"
                    name="from_name"
                    required
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </label>
                <label>
                  <input
                    placeholder="Your Email ID"
                    type="email"
                    name="from_email"
                    required
                  />
                </label>
              </div>

              <label>
                <textarea
                  placeholder="Your Message"
                  name="message"
                  required
                ></textarea>
              </label>
              <button className="red" type="submit" value="SEND">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactMe;
