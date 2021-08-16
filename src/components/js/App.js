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
import MoreInfo from "./MoreInfo";

import "../css/Homepage.css";
import "../css/AboutMe.css";
import "../css/Skills.css";
import "../css/Projects.css";
import "../css/Contact.css";
import "../css/Footer.css";
import "../css/MoreInfo.css";

function App() {
  const [language, setLanguage] = useState(true);

  function handleLanguage() {
    setLanguage(!language);
  }

  const [burger, setBurger] = useState(false);

  function handleClickBurger() {
    setBurger(!burger);
    if (burger) {
      document.body.classList.remove("js-mobile-menu-open");
    } else {
      document.body.classList.add("js-mobile-menu-open");
    }
  }

  function disableActiveMenu() {
    document.body.classList.remove("js-mobile-menu-open");
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage
              language={language}
              handleLanguage={handleLanguage}
              logo={logo}
              burger={burger}
              setBurger={setBurger}
              handleClickBurger={handleClickBurger}
              disableActiveMenu={disableActiveMenu}
            />
            <AboutMe language={language} />
            <Skills language={language} />
            <Projects language={language} />
            <Contact language={language} />
            <Footer language={language} />
          </Route>
        </Switch>
        <Route exact path="/more_info">
          <MoreInfo
            language={language}
            handleLanguage={handleLanguage}
            logo={logo}
            burger={burger}
            setBurger={setBurger}
            handleClickBurger={handleClickBurger}
            disableActiveMenu={disableActiveMenu}
          />
          <Footer language={language} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
