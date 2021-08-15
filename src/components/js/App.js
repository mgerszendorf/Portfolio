import React, { useState } from "react";
import "../css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "../img/logo.svg";

import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

import "../css/Homepage.css";
import "../css/AboutMe.css";
import "../css/Skills.css";
import "../css/Projects.css";
import "../css/Contact.css";
import "../css/Footer.css";

function App() {
  const [language, setLanguage] = useState(true);

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
            <AboutMe language={language} />
            <Skills language={language} />
            <Projects language={language} />
            <Contact language={language} />
            <Footer language={language} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
