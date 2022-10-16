import "./Meetings.styles.scss";

const Meetings = () => (
  <div className="meetings-container">
    <h1>Cykl spotkań: </h1>

    <p className="kolor">
      To spotkania z serii 6-8 spotkań, które organizujemy między wrześniem 2022
      a czerwcem 2023.
    </p>
    <p>
      Spotkania te będą się skupiały na temacie budowiania nowej
      społecznosci/wspólnoty od podstaw.
    </p>
    <p>Poruszymy na nich między innymi takie tematy jak:</p>
    <ul>
      <li>tworzeni wizjii</li>
      <li>budowanie grupy założycielskiej</li>
      <li>facylitacja spotkań </li>
      <li>zasady przyjmowania nowych członków </li>
      <li>naturalne budownictwo, techniki i design </li>
      <li>unschooling dla dzieci i dorosłych </li>
      <li>rozwój osobisty i jego wpływ na życie w społeczności </li>
    </ul>

    <p className="kolor">
      Dokładny plan następnych spotkań będzie uaktualniany na bieżąco.
    </p>
    <p className="kolor">
      Tymczasem zapraszamy na drugie spotkanie 2-9 listopada
    </p>

    <h1>Kolejne spotkania: </h1>

    <div className="meetings-box">
      <h1>Spotkanie 2</h1>
      <h3>(2-9 listopada)- "Co dobrze wiedzieć zanim sie zacznie"</h3>

      <h4>
        Głównie powtórzenie tematów z poprzedniego spotkania - dla osób, które
        nie brały udziału w poprzednim spotkaniu plus trochę o procesie
        rekrutowania nowych członków
      </h4>
      <p className="kolor">
        To spotkanie jest drugim z serii 6-8 spotkań, które planujemy
        zroganizować w ciągu najbliższych 9 miesięcy.
      </p>
      <p>
        Spotkanie to będzie się skupiało na temacie budowiania nowej
        społecznosci/wspólnoty od podstaw.
      </p>
      <p>W weekend takie tematy jak:</p>
      <ul>
        <li>tworzeni wizjii</li>
        <li>budowanie grupy założycielskiej</li>
        <li>zasady przyjmowania nowych członków </li>

        <li>
          jakie błędy najczęściej prowadzą do rozpadu społeczności i jak ich
          uniknąć
        </li>
        <li>czy bycie założycielem to coś dla mnie</li>
      </ul>
      <p>
        W pozostałym czasie będziemy się poznawać, a także dyskutować o
        projektach, które wyłoniły się podczas poprzedniego spotkania.
      </p>
    </div>

    <h1>Poprzednie spotkania: </h1>
    <div className="meetings-box" id="first">
      <h1>Spotkanie 1</h1>

      <h3>(28 wrześnie - 5 października) - "Pierwsze spotkanie"</h3>

      <p className="kolor">
        To spotkanie było pierwszym z serii 6-8 spotkań, które planujemy
        zroganizować w ciągu najbliższych 9 miesięcy.
      </p>

      <p>Poruszyliśmy na nim takie tematy jak:</p>
      <ul>
        <li>tworzeni wizjii</li>
        <li>budowanie grupy założycielskiej</li>
        <li>
          jakie błędy najczęściej prowadzą do rozpadu społeczności i jak ich
          uniknąć
        </li>
        <li>czy bycie założycielem to coś dla mnie</li>
      </ul>
      <p>
        A także podzielilismy się naszymi planami związanymi z budowaniem
        społeczności
      </p>
      <img
        className="image-meeting"
        src="https://i.ibb.co/JHqVMcr/signal-2022-10-15-110235-002.jpg"
      />
      <img className="image-meeting" src="https://i.ibb.co/Gv17c8j/obiad.jpg" />
      <br />
      <br />
      <br />
      <br />

      <h2>Dla inspiracji: </h2>
      <p className="kolor">
        {" "}
        Strona poprzedniego projektu - serii spotkań w języku angielskim, który
        odbył się w 2021 roku.
      </p>
      <p>https://dzikilubiabloto.github.io/vision/</p>
      <br />
      <br />
      <br />
      <br />

      <div>
        <iframe
          className="video"
          src="https://player.vimeo.com/video/227126380?h=647051da6b"
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
        <p>
          <a href="https://vimeo.com/227126380">
            Deep Listening - The Secret to Living in Community
          </a>{" "}
          from{" "}
          <a href="https://vimeo.com/communitybookstore">
            Intentional Community Videos
          </a>{" "}
          on <a href="https://vimeo.com">Vimeo</a>.
        </p>
      </div>
      <img src="https://i.ibb.co/sgb9W3m/715fb34c8f8027d2e7c4c7a4938acbc2.jpg" />
      <img src="https://i.ibb.co/LJWDsLy/Moomin-by-Tove-Jansson.jpg" />
      <iframe
        className="video"
        title="vimeo-player"
        src="https://player.vimeo.com/video/280254239?h=044d9a501e"
        width="640"
        height="360"
      ></iframe>
    </div>
  </div>
);

export default Meetings;
