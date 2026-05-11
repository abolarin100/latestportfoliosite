import React, { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import "../css/Contact.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = (props) => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = form;

    if (!name || !email || !subject || !message) {
      return toast.error("Please complete all fields.");
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return toast.error("Please enter a valid email address.");
    }

    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent! I'll get back to you soon. 🎉");
      setForm({ name: "", email: "", subject: "", message: "" });
      window.location.href = "#home";
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch With Me</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">
            Drop me a message and I'll get back to you. 👋
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              name="subject"
              className="contact__form-input"
              placeholder="Email subject"
              value={form.subject}
              onChange={handleChange}
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn" disabled={loading}>
            {loading ? (
              <>
                <span className="btn__spinner" /> Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        <ToastContainer position="bottom-right" theme={props.theme} />
      </div>
    </section>
  );
};

export default Contact;
