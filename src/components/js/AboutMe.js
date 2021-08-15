import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import my_photo from "../img/my_photo.jpg";

function AboutMe(props) {
  return (
    <section className="about_me">
      <div className="about_me_wrapper">
        <div className="left_area_am">
          <h2>
            {props.language ? "O" : "About"}{" "}
            <span>{props.language ? "mnie" : "me"}</span>.
          </h2>
          {props.language ? (
            <p className="left_area_txt_am">
              Nazywam się Marek Gerszendorf. Na co dzień pracuję jako młodszy
              konstruktor maszyn, ale moją wielką pasją jest programowanie.
              Zainteresowałem się tym tematem już na początku gimnazjum ale
              wtedy traktowałem to głownie jako zabawę. Od dłuższego czasu
              poświęcam na naukę programowania każdą wolną chwilę i sprawia mi
              to ogromną przyjemność. Codziennie dążę do poszerzania swoich
              umiejętności poprzez poznawanie najnowszych technologii i
              rozwiązań.
            </p>
          ) : (
            <p className="left_area_txt_am">
              My name is Marek Gerszendorf. I work as a junior machine
              constructor daily, but programming is my great passion. I got
              interested in this topic at the beginning of junior high school,
              but then It was mostly a fun thing to do. For a long time, I have
              been devoting every free moment to learning programming and it
              gives me great pleasure. Every day I strive to expand my skills by
              learning about the latest technologies and solutions.
            </p>
          )}
          <div className="more_info">
            <Link to="/more_info">
              {props.language ? "Więcej" : "More info"}
            </Link>
            <BsArrowRight className="more_info_arrow" />
            <div></div>
          </div>
        </div>
        <div className="right_area_am">
          <div className="photo_container">
            <div className="photo_background"></div>
            <div className="my_photo">
              <img src={my_photo} alt="My pic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
