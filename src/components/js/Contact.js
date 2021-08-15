import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact(props) {
  return (
    <section className="contact">
      <div className="contact_wrapper">
        {props.language ? (
          <h2>
            Kontakt<span>.</span>
          </h2>
        ) : (
          <h2>
            Contact<span>.</span>
          </h2>
        )}
        <div className="c_txt">
          <p>
            {props.language
              ? "Obecnie szukam swojej pierwszej pracy jako Junior FrontEnd Developer. Jeśli masz dla mnie ofertę pracy lub po prostu chcesz o coś zapytać, napisz do mnie, a na pewno odpowiem."
              : "I am currently looking for my first job as a Junior FrontEnd Developer. If you have a job offer for me or you just want to ask about something, write to me and I will answer for sure."}
          </p>
        </div>
        <div className="c_email_phone">
          <div className="c_email">
            <MdEmail className="c_email_icon" />
            <p>marek.gerszendorf@wp.pl</p>
          </div>
          <div className="c_phone">
            <FaPhoneAlt className="c_phone_icon" />
            <p>724 234 101</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
