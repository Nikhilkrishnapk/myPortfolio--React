import React from "react";
import "./cssforcomponents/Contact.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "57d58333-cadb-4556-978e-90f9ba9a8875");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message)
    }
  };
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Connect With Me</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Feel free to reach out! Whether you have a project idea, a question,
            or just want to connect, I'm always open to new opportunities and
            collaborations. Let's build something great together!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <i class="fa-solid fa-envelope"></i>{" "}
              <p>nikhilkrishna903@gmail.com</p>
            </div>
            <div className="contact-detail">
              <i class="fa-solid fa-phone"></i> <p>+91 9544480621</p>
            </div>
            <div className="contact-detail">
              <i class="fa-solid fa-location-dot"></i> <p>Kerala,India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <label htmlFor="">Write Your Message Here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
