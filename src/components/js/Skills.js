import React from "react";
import html from "../img/html_icon.png";
import css from "../img/css_icon.png";
import js from "../img/js_icon.png";
import sass from "../img/sass_icon.png";
import react from "../img/react_icon.png";
import rwd from "../img/rwd_icon.png";
import node from "../img/node_icon.png";
import express from "../img/expressjs_icon.png";
import mongodb from "../img/mongodb_icon.png";
import git from "../img/github_icon.png";
import figma from "../img/figma_icon.png";
import adobexd from "../img/adobexd_icon.png";
import csharp from "../img/c#_icon.png";
import ts from "../img/typescript_icon.png";

function Skills() {
  return (
    <section className="skills">
      <div className="skills_header">
        <h2>
          Skills<span>.</span>
        </h2>
      </div>
      <div className="skills_first_container">
        <div className="skills_subtitle">
          <p>Main technologies</p>
        </div>
        <div className="first_container_technologies">
          <div className="html">
            <img src={html} alt="Html icon" />
            <p>HTML</p>
          </div>
          <div className="css">
            <img src={css} alt="Css icon" />
            <p>CSS</p>
          </div>
          <div className="js">
            <img src={js} alt="JavaScript icon" />
            <p>JavaScript</p>
          </div>
          <div className="sass">
            <img src={sass} alt="Sass icon" />
            <p>SASS</p>
          </div>
          <div className="react">
            <img src={react} alt="React icon" />
            <p>React</p>
          </div>
          <div className="rwd">
            <img src={rwd} alt="Responsive web design icon" />
            <p>RWD</p>
          </div>
          <div className="git">
            <img src={git} alt="Git icon" />
            <p>GIT</p>
          </div>
          <div className="FIGMA">
            <img src={figma} alt="Figma icon" />
            <p>Figma</p>
          </div>
          <div className="adobexd">
            <img src={adobexd} alt="Adobe XD icon" />
            <p>Adobe XD</p>
          </div>
        </div>
        <div className="skills_second_container">
          <div className="skills_subtitle">
            <p>Technologies that I have been learning recently</p>
          </div>
          <div className="second_container_technologies">
            <div className="node">
              <img src={node} alt="Node.js icon" />
              <p>Node.js</p>
            </div>
            <div className="express">
              <img src={express} alt="Express icon" />
              <p>Express.js</p>
            </div>
            <div className="mongodb">
              <img src={mongodb} alt="MongoDB icon" />
              <p>MongoDB</p>
            </div>
            <div className="csharp">
              <img src={csharp} alt="C sharp icon" />
              <p>C#</p>
            </div>
            <div className="ts">
              <img src={ts} alt="TypeScript icon" />
              <p>TypeScript</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
