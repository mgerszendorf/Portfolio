import React, { useState } from "react";
import "../css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "../img/logo.svg";

import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";

import "../css/Homepage.css";
import "../css/AboutMe.css";
import "../css/Skills.css";
import "../css/Projects.css";

function App() {
  const [language, setLanguage] = useState(false);

  function handleLanguage() {
    setLanguage(!language);
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Homepage
              language={language}
              handleLanguage={handleLanguage}
              logo={logo}
            />
            <AboutMe />
            <Skills />
            <Projects />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
