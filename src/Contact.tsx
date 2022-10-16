import "./Contact.styles.scss";

const Contact = () => (
  <div className="aboutus-container">
    <div className="aboutus-box">
      <div className="aboutus-title">Spotkanie organizują:</div>
      <div className="aboutus-person-box">
        <div className="aboutus-picture">
          <img src="https://i.ibb.co/ZTf6yZ5/Screenshot-from-2022-09-16-03-50-52.png" />
        </div>
        <div className="aboutus-description">
          <p className="kolor">Talita</p>
          <p>
            Wyrąbie dziurę w lodzie i wskoczy do niej. Pojedzie autostopem lub
            rowerem w nieznane, żeby pływać w jeziorach, spacerować po jesiennym
            lesie podczas deszczu czy spłynąć kanu. Dołączy do najbardziej
            intelektualnych, emocjonalnych lub głupich rozmów albo będzie
            milczeć. W wolnym czasie programuje i słucha podcastów o budowaniu
            wspólnot/społeczności.{" "}
          </p>
          <p>
            Marzy o założeniu intentional community. Najpierw jednej, potem
            drugiej..
          </p>
          <p>
            Napisz na:{" "}
            <a href="mailto:startingcommunity@proton.me" className="kolor">
              {" "}
              startingcommunity@proton.me
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
