import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import acme from "../img/Acme 600x600.png";
import pomodoro from "../img/Pomodoro 600x600.png";
import todo_app from "../img/Todo app 600x600.png";
import recover from "../img/Recover 600x600.png";
import shortly from "../img/Shortly 600x600.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
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
        background: "#F6C004",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "slider",
  };

  const projects = [acme, pomodoro, todo_app, recover, shortly];

  return (
    <section className="projects">
      <div className="projects_wrapper">
        <h2>
          Projects<span>.</span>
        </h2>
        <div className="p_left_area">
          <h3>Acme</h3>
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
          <p>
            ontrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </p>
          <div className="technologies_used"></div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
