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
            <p>
              ontrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
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
