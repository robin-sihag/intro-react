import React from "react";
import "./contactme.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactMe = (props) => {
  const form = useRef();

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
            {/* <input type="submit" className="flat-button" value="SEND" /> */}
            <button type="submit" value="SEND">SEND</button>

            
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
