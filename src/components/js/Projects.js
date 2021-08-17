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
  SiMongodb,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

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

function Projects(props) {
  const [activeSlide, setActiveSlider] = useState(0);
  const [activeProject, setActiveProject] = useState(-1);
  const [activeLink, setActiveLink] = useState(false);

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

  const projects = [
    {
      id: 0,
      name: acme,
    },
    {
      id: 1,
      name: pomodoro,
    },
    {
      id: 2,
      name: recover,
    },
    {
      id: 3,
      name: todo_app,
    },
    {
      id: 4,
      name: shortly,
    },
  ];
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
  const projectTxtPl = [
    'Acme jest przykładową stroną internetową hotelu. Stronę zaprojektował Dutkiewicz Design. Marcin stworzył projekt graficzny w Figmie a ja zająłem się programowaniem. Ten projekt jest obecnie w fazie rozwoju. Aplikacja nie ma jeszcze połączenia z bazą danych. Planuję użyć w tym celu MongoDB, Node.js i Express.js. Docelowo strona będzie zbudowana zgodnie z "MERN stack"',
    "Aplikacja umożliwiająca naukę za pomocą techniki pomodoro. Timer odlicza cztery 25 minutowe sekcji przeznaczone na naukę oraz 5 minutowe przerwy między nimi. Po ukończeniu wszystkich sekcji przewidziana jest dłuższa 15 minutowa przerwa.",
    "Recover jest jedną z pierwszych stron, które stworzyłem. Projekt graficzny wykonał Marcin z Dutkiewicz Design. Projekt ten pozwolił mi lepiej poznać HTML, CSS i podstawy JavaScript",
    'Aplikacja "Todo app" powstała w celu lepszej organizacji czasu. Pozwala dodać nam termin wykonania zadania, ustawić priorytet oraz liczy już wykonane. Aplikacja łączy się z bazą danych MongoDB Atlas a sam backend został napisany z użyciem Node.js, Express.js oraz MongoDB.',
    "Shortly jest stroną umożliwiającą skracanie linków. Projekt powstał w ramach wyzwania Frontend Mentor. Dzięki tej stronie nauczyłem się w jaki sposób pobierać dane z API oraz jak je wyświetlać w swoich projektach.",
  ];
  const projectTxtEng = [
    "Acme is an example of a hotel website. The website was designed by Dutkiewicz Design. Marcin created a graphic design in Figma and I programmed everything myself. This project is currently in development. The application does not yet have a database connection. I plan to build this with Node.js, MongoDB and Express.js. Ultimately, the site will follow the MERN stack.",
    "Pomodoro is an application designed for better time management. The timer counts down four 25-minute learning sections and 5-minute breaks between them. There is a 15-minute break after all sections are completed.",
    "Recover is one of the first websites I created. The graphic design was done by Marcin from Dutkiewicz Design. This project allowed me to get to know HTML, CSS and the basics of JavaScript better",
    "An application designed to better organize your time. It allows you to set the priority of tasks and counts already completed. Adds a due date for the task. ",
    "Shortly is a shortener link website. The project was created as part of the Frontend Mentor challenge. Thanks to this page, I learned how to get data from the API and how to display it in my projects.",
  ];

  return (
    <section className="projects">
      <div className="projects_wrapper">
        <h2>
          {props.language ? "Projekty" : "Projects"}
          <span>.</span>
        </h2>
        <div className="left_right_wrapper">
          <div className="p_left_area">
            <div className="slider_desktop">
              <Slider {...settings}>
                {projects.map((project) => (
                  <div key={project.id}>
                    <img src={project.name} alt={project.name} />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="slider_mobile">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`projects_wrapper_img_${project.id}`}
                  onClick={
                    activeProject > -1 && activeLink
                      ? () => setActiveProject(-1)
                      : () => setActiveProject(project.id)
                  }
                >
                  <img
                    src={project.name}
                    alt={project.name}
                    className={
                      activeProject === project.id
                        ? `projects_img_${activeProject}`
                        : "nonprojects_img"
                    }
                    onClick={() => setActiveLink(false)}
                  />
                  <div
                    className={
                      activeProject === project.id
                        ? `active_project_${activeProject}`
                        : "nonactive_project"
                    }
                  >
                    <div>
                      <a
                        href={repository[activeProject]}
                        onClick={() => setActiveLink(true)}
                      >
                        <SiGithub />
                      </a>
                      <a
                        href={url[activeProject]}
                        onClick={() => setActiveLink(true)}
                      >
                        <CgWebsite />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p_right_area">
            <h3>{projectTitle[activeSlide]}</h3>
            {props.language ? (
              <p>{projectTxtPl[activeSlide]}</p>
            ) : (
              <p>{projectTxtEng[activeSlide]}</p>
            )}
            <p className="link">
              Live: <a href={url[activeSlide]}>{url[activeSlide]}</a>
            </p>
            <p className="link">
              {props.language ? "Repozytorium: " : "Repository: "}
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
              {activeSlide === 1 || activeSlide === 2 || activeSlide === 4 ? (
                <SiJavascript className="technologies_icon" />
              ) : null}
              {activeSlide === 0 ||
              activeSlide === 1 ||
              activeSlide === 2 ||
              activeSlide === 3 ||
              activeSlide === 4 ? (
                <SiGithub className="technologies_icon" />
              ) : null}
              {activeSlide === 3 ? (
                <SiMongodb className="technologies_icon" />
              ) : null}
              {activeSlide === 3 ? (
                <FaNode className="technologies_icon" />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
