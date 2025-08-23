import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Success:', result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('Error:', error.text);
          alert('Failed to send message. Try again.');
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>
      <div className="contact-container">
        <div className="contact-sidebar">
          <div className="why-hire-me">
            <h3>Get in Touch</h3>
            <p>Send me a message to discuss your project or collaboration.</p>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="input-box">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="input-box">
              <textarea name="message" placeholder="Your Message" required />
            </div>
            <button type="submit" className="btn">
              Send
            </button>
          </form>
        </div>
        <div className="contact-section">
          <h3>Location & Address</h3>
          <p>
            <strong>Present Address:</strong> Kalshi, Mirpur, Dhaka, Bangladesh
          </p>
          <p>
            <strong>Permanent Address:</strong> Gopalbari, Sherpur Sadar,
            Sherpur, Mymensingh, Bangladesh
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:ahsanulaminshanto@gmail.com" className="email-link">
              ahsanulaminshanto@gmail.com
            </a>
          </p>
          <p>
            <strong>Contact Number:</strong> +880 1938-772387
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Map
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
