import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo_footer.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

function Footer(props) {
  return (
    <section className="footer">
      <div className="footer_wrapper">
        <div className="logo_footer">
          <img src={logo} alt={logo} />
        </div>
        <div className="social_media_footer">
          <a href="https://github.com/mgerszendorf">
            <AiFillGithub className="github_footer" />
          </a>
          <a href="https://www.linkedin.com/in/marekgerszendorf/">
            <FaLinkedinIn className="linkedin_footer" />
          </a>
        </div>
        <Link>Polityka prywatności</Link>
        <p>© 2021 Marek Gerszendorf. All rights reserved</p>
      </div>
    </section>
  );
}

export default Footer;
