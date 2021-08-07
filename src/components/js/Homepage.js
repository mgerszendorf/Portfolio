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
        <Link to="/">
          <div className="logo">
            <img src={props.logo} alt="My logo" />
          </div>
        </Link>
        <ul>
          <li>
            <Link to="/about_me">About me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="burger_language_cv_container">
          <Link to="/">
            <div className="language">
              <img
                onClick={props.handleLanguage}
                src={props.language ? poland : united_kingdom}
                alt={props.language ? "Polish language" : "English language"}
              />
            </div>
          </Link>
          <div className="cv">
            <p>Resume</p>
          </div>
          <div className="burger_mobile">
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
        <div className="go_down_btn">
          <RiArrowDropDownLine className="RiArrowDropDownLine" />
        </div>
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
