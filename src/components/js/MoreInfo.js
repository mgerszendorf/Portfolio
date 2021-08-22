import React from "react";
import { Link } from "react-router-dom";
import poland from "../img/poland.png";
import united_kingdom from "../img/united-kingdom.png";

function MoreInfo(props) {
  return (
    <section className="more_info_section">
      <nav className="top_bar">
        <Link to="/Portfolio">
          <div className="logo">
            <img src={props.logo} alt="My logo" />
          </div>
        </Link>
        <ul className={props.burger ? "active_burger" : "nonactive_burger"}>
          <li>
            <Link to="/">{props.language ? "O mnie" : "About me"}</Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                props.setBurger(false);
                props.disableActiveMenu();
              }}
            >
              {props.language ? "Projekty" : "Projects"}
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                props.setBurger(false);
                props.disableActiveMenu();
              }}
            >
              {props.language ? "Umiejętności" : "Skills"}
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                props.setBurger(false);
                props.disableActiveMenu();
              }}
            >
              {props.language ? "Kontakt" : "Contact"}
            </Link>
          </li>
        </ul>
        <div className="burger_language_cv_container">
          <Link to="/Portfolio">
            <div className="language">
              <img
                onClick={props.handleLanguage}
                src={props.language ? united_kingdom : poland}
                alt={props.language ? "English language" : "Polish language"}
              />
            </div>
          </Link>
          <Link
            to={props.language ? "/files/cv_pl.pdf" : "/files/cv_eng.pdf"}
            target="_blank"
            download
          >
            <div className="cv">
              {props.language ? <p>CV</p> : <p>Resume</p>}
            </div>
          </Link>
          <div
            className="burger_mobile"
            onClick={() => {
              props.handleClickBurger();
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </nav>

      <h2>
        {props.language ? "O" : "About"}{" "}
        <span>{props.language ? "mnie" : "me"}</span>.
      </h2>
      <div className="am_txt">
        <p>
          {props.language
            ? "Nazywam się Marek Gerszendorf, mieszkam w okolicach Poznania. Na co dzień pracuję jako młodszy konstruktor maszyn w firmie zajmującej się produkcją frezarek CNC oraz zrobotyzowanych linii produkcyjnych. Od roku studiuję informatykę w Wyższej Szkole Bankowej w Poznaniu w trybie niestacjonarnym. Od dłuższego czasu każdą wolną chwilę poświęcam na naukę programowania. Zainteresowałem się tym tematem już na początku gimnazjum ale wtedy traktowałem to głównie jako zabawę. W trakcie technikum zacząłem uczyć się bardziej intensywnie ale nadal sprawia mi to taką samą radość jak na początku. Głównie staram się rozwijać w technologiach webowych ale jestem gotów podjąć się nowych wyzwań."
            : "My name is Marek Gerszendorf, I live near Poznań. Daily, I work as a junior machine designer in a company that produces CNC milling machines and robotic production lines. I have been studying computer science at the WSB University in Poznań for a year on weekends. For a long time, I have devoted every free moment to learning programming. I got interested in this topic at the beginning of junior high school, but then I treated it mainly as a game. During technical school, I started to study more intensively, but it still gives me the same joy as at the beginning. I mainly try to develop web technologies but I am ready to take on new challenges."}
        </p>
      </div>
      <div className="teaching_process">
        <h3>{props.language ? "Proces nauczania" : "The teaching process"}</h3>
        <p>
          {props.language
            ? "Od momentu w którym zacząłem wiązać z programowaniem swoją przyszłość zacząłem uczyć się z kursów na Udemy. Głównie były to lekcje Samuraja Programowania, które dały mi dobre podstawy do dalszej nauki. Obejrzałem również niezliczone ilości kursów od zagranicznych twórców. W nauce programowania nie ograniczam się tylko do polskojęzycznych materiałów a wręcz przeciwnie korzystam głównie z lekcji w języku angielskim. Po poznaniu podstaw danego zagadnienia zawsze staram się zagłębić w dokumentację, ponieważ to tam możemy znaleźć najlepsze i pewne informacje. Z racji, że studiuję informatykę niestacjonarnie staram się wykorzystać ten czas najlepiej jak potrafię. Uczelnia zmusza mnie do nauki rzeczy, które na pierwszy rzut oka nie wydają nam się atrakcyjne, ale są bardzo potrzebne. Mam między innymi zajęcia z algorytmiki czy systemów operacyjnych, które pozwalają spojrzeć na programowanie od zupełnie innej strony. Na studiach programujemy głównie w języku C#."
            : "From the moment I started to associate my future with programming, I started learning from courses on Udemy. Mainly these were “Samuraj Programowania” lessons which gave me a good foundation for further learning. I also watched countless courses from foreign authors. In learning programming, I do not limit myself to only Polish-language materials, on the contrary, I mainly use lessons in English. After learning the basics of a given issue, I always try to delve into the documentation, because this is where we can find the best and reliable information. Because I study computer science extramural, I try to use this time as best I can. The university forces me to learn things that at first glance do not seem attractive to us, but are very necessary. I have, among others, classes in algorithmics or operating systems that allow you to look at programming from a completely different angle. During studies, we mainly program in C#."}
        </p>
      </div>
      <div className="personality">
        <h3>{props.language ? "Osobowość" : "Personality"}</h3>
        <p>
          {props.language
            ? "Na co dzień jestem spokojny i ambitny.  Każdego dnia wyznaczam sobie nowe cele i nieustannie dążę do ich realizacji. Każde wyzwanie traktuję jako nową możliwość rozwoju. Świetnie czuję się w pracy zespołowej, ponieważ każda osoba w zespole wnosi ze sobą inne doświadczenia i spojrzenie na problem."
            : "Every day I am calm and ambitious. Every day I set new goals for myself and constantly strive to achieve them. I treat each challenge as a new development opportunity. I feel great in teamwork because each person on the team brings with them different experiences and perspectives on the problem."}
        </p>
      </div>
    </section>
  );
}

export default MoreInfo;
