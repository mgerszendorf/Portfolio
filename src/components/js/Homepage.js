import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import poland from "../img/poland.png";
import united_kingdom from "../img/united-kingdom.png";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

function Homepage(props) {
  return (
    <section className="homepage">
      <nav className="top_bar">
        <Link to="/Portfolio">
          <div className="logo">
            <img src={props.logo} alt="My logo" />
          </div>
        </Link>
        <ul className={props.burger ? "active_burger" : "nonactive_burger"}>
          <li>
            <LinkScroll
              activeClass="active"
              to="about_me"
              spy={true}
              smooth={true}
              duration={500}
            >
              {props.language ? "O mnie" : "About me"}
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => {
                props.setBurger(false);
                props.disableActiveMenu();
              }}
            >
              {props.language ? "Projekty" : "Projects"}
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => {
                props.setBurger(false);
                props.disableActiveMenu();
              }}
            >
              {props.language ? "Umiejętności" : "Skills"}
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => {
                props.setBurger(false);
                props.disableActiveMenu();
              }}
            >
              {props.language ? "Kontakt" : "Contact"}
            </LinkScroll>
          </li>
        </ul>
        <div className="burger_language_cv_container">
          <Link to="/Portfolio">
            <div className="language">
              <img
                onClick={props.handleLanguage}
                src={props.language ? united_kingdom : poland}
                alt={props.language ? "English language" : "Polish language"}
              />
            </div>
          </Link>
          <Link
            to={
              props.language
                ? "/Portfolio/files/cv_pl.pdf"
                : "/Portfolio/files/cv_eng.pdf"
            }
            target="_blank"
            download
          >
            <div className="cv">
              {props.language ? <p>CV</p> : <p>Resume</p>}
            </div>
          </Link>
          <div
            className="burger_mobile"
            onClick={() => {
              props.handleClickBurger();
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </nav>

      <div className="homepage_wrapper">
        <div className="main_txt">
          <div className="first_txt">
            <p>Hello World!</p>
          </div>
          <div className="second_txt">
            <p>Marek</p>
            <p className="yellow_txt">FrontEnd Developer</p>
          </div>
          <div className="third_txt">
            <p>Gerszendorf</p>
          </div>
        </div>
        <LinkScroll
          activeClass="active"
          to="about_me"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div className="go_down_btn">
            <RiArrowDropDownLine className="RiArrowDropDownLine" />
          </div>
        </LinkScroll>
        <div className="outer_stripes">
          <div className="outer_stripes_left">
            <a href="https://github.com/mgerszendorf">
              <AiFillGithub className="github_icon" />
            </a>
            <a href="https://www.linkedin.com/in/marekgerszendorf/">
              <FaLinkedinIn className="linkedin_icon" />
            </a>
            <div className="line"></div>
          </div>
          <div className="outer_stripes_right">
            <p>marek.gerszendorf@wp.pl</p>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
