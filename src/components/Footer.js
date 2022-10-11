import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
  const [state, handleSubmit] = useForm("xzbweqal");
  if (state.succeeded) {
      return <p>Thanks for contacting us.</p>;
  }
}

export default function Footer() {
  return (
    
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        <p>
          Send us a message and we'll get back as soon as possible.
        </p>
        <form method="post" action="https://formspree.io/f/xzbweqal">
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
};