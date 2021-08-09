import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import acme from "../img/Acme 600x600.png";
import pomodoro from "../img/Pomodoro 600x600.png";
import todo_app from "../img/Todo app 600x600.png";
import recover from "../img/Recover 600x600.png";
import shortly from "../img/Shortly 600x600.png";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiGithub,
} from "react-icons/si";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

function Projects() {
  const [activeSlide, setActiveSlider] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setActiveSlider(next),
    afterChange: (current) => setActiveSlider(current),
    className: "slider",
  };

  const projects = [acme, pomodoro, recover, todo_app, shortly];
  const url = [
    "https://mgerszendorf.github.io/Acme/",
    "https://mgerszendorf.github.io/Pomodoro-app/",
    "https://mgerszendorf.github.io/Recover/",
    "https://mgerszendorf.github.io/Todo-app/",
    "https://mgerszendorf.github.io/Shortly/",
  ];
  const repository = [
    "https://github.com/mgerszendorf/Acme",
    "https://github.com/mgerszendorf/Pomodoro-app",
    "https://github.com/mgerszendorf/Recover",
    "https://github.com/mgerszendorf/Todo-app",
    "https://github.com/mgerszendorf/Shortly",
  ];
  const projectTitle = [
    "Acme",
    "Pomodoro app",
    "Recover",
    "Todo app",
    "Shortly",
  ];
  const projectTxt = [
    "Acme is an example of a hotel website. The website was designed by Dutkiewicz Design. Marcin created a graphic design in Figma and I programmed everything myself. This project is currently in development. The application does not yet have a database connection. I plan to build this with Node.js, MongoDB and Express.js. Ultimately, the site will follow the MERN stack.",
    "Pomodoro is an application designed for better time management. The timer counts down four 25-minute learning sections and 5-minute breaks between them. There is a 15-minute break after all sections are completed. ",
    "Recover is one of the first websites I created. The graphic design was done by Marcin from Dutkiewicz Design. This project allowed me to get to know HTML, CSS and the basics of JavaScript better",
    "An application designed to better organize your time. It allows you to set the priority of tasks and counts already completed. Adds a due date for the task. ",
  ];

  return (
    <section className="projects">
      <div className="projects_wrapper">
        <h2>
          Projects<span>.</span>
        </h2>
        <div className="left_right_wrapper">
          <div className="p_left_area">
            <div className="slider_desktop">
              <Slider {...settings}>
                {projects.map((project) => (
                  <div>
                    <img src={project} alt={project} />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="slider_mobile">
              {projects.map((project) => (
                <div>
                  <img src={project} alt={project} />
                </div>
              ))}
            </div>
          </div>
          <div className="p_right_area">
            <h3>{projectTitle[activeSlide]}</h3>
            <p>{projectTxt[activeSlide]}</p>
            <p className="link">
              Live: <a href={url[activeSlide]}>{url[activeSlide]}</a>
            </p>
            <p className="link">
              Repository:{" "}
              <a href={repository[activeSlide]}>{repository[activeSlide]}</a>
            </p>
            <div className="technologies_used">
              {activeSlide === 2 || activeSlide === 4 ? (
                <SiHtml5 className="technologies_icon" />
              ) : null}
              {activeSlide === 0 ||
              activeSlide === 1 ||
              activeSlide === 2 ||
              activeSlide === 3 ||
              activeSlide === 4 ? (
                <SiCss3 className="technologies_icon" />
              ) : null}
              {activeSlide === 0 || activeSlide === 1 || activeSlide === 3 ? (
                <SiReact className="technologies_icon" />
              ) : null}
              {activeSlide === 1 ? (
                <SiJavascript className="technologies_icon" />
              ) : null}
              {activeSlide === 0 ||
              activeSlide === 1 ||
              activeSlide === 2 ||
              activeSlide === 3 ||
              activeSlide === 4 ? (
                <SiGithub className="technologies_icon" />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
