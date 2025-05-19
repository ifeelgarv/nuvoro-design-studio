"use client";
import { useRevealer } from "@/hooks/useRevealer";

const Contact = () => {
    useRevealer();
  return (
    <>
      <div className="revealer"></div>
      <div className="contact">
        <div className="col">
          <h2>Contact Us</h2>
        </div>
        <div className="col">
          <div className="contact-copy">
            <h2>Collaboration</h2>
            <h2>studio@nuvoro.com</h2>
          </div>

          <div className="contact-copy">
            <h2>Inquiries</h2>
            <h2>support@nuvoro.com</h2>
          </div>

          <div className="social">
            <p>Instagram</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
