import React, { useState } from "react";
import "./Contactus.css";

function ContactForm() {

 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");


 const handleSubmit = event => {
  event.preventDefault();
  console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  // here you can add the code to send the form data to the server
 };


 return (
  <div className="contact-us-container" id="contact">
   <div className="image-container" data-aos="zoom-in-up">
    <img src="https://images.pexels.com/photos/164686/pexels-photo-164686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image" />
   </div>
   <div className="heading">
    <div className="heading1">
     <h1>CONTACT US</h1>
    </div >
    <div data-aos="zoom-in">
     <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
       type="text"
       id="name"
       name="name"
       value={name}
       onChange={event => setName(event.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
       type="email"
       id="email"
       name="email"
       value={email}
       onChange={event => setEmail(event.target.value)}
      />

      <label htmlFor="message">Message:</label>
      <textarea
       id="message"
       name="message"
       value={message}
       onChange={event => setMessage(event.target.value)}
      />
      <div className="button">
       <button type="submit">Send Message</button>

      </div>
     </form>
    </div>
   </div>
  </div >
 );
}

export default ContactForm;
