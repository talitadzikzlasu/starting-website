import "./Home.styles.scss";

const photos = [
  "https://mazury24.eu/repo/img/galerie/j015-jezioro-boczne-porty-2019/jezioro-boczne-porty-2019_14419_7.jpg",
  "https://www.gizycko.com/pics/xfDkZszlak_pixabay_2.jpg",
  "https://i.ibb.co/W5WWGPr/1585150981.jpg",
  "https://i.ibb.co/9WRGJ74/Screenshot-from-2022-09-15-10-37-31.png",
  "https://i.ibb.co/fDp6hsC/signal-2022-08-30-192726-002.jpg",
  "https://i.ibb.co/3zf2L6G/305524454-646020420273828-1204393967445439747-n.png",
  "https://polskieostoje.pl/images/mazurska-ostoja/rydzewo-12102019_1-galeria.jpg",
  "https://mazury24.eu/img/galerie/102587_7.jpg",
  "https://i.ibb.co/44S6ZHB/304787723-428529502475492-8099473415662598241-n.png",
];

const Home = () => (
  <div>
    <div id="start" className="main-page-container">
    <img className="phone-cloud" src="https://i.ibb.co/9gwSZxR/rsz-mainbgmall.png" />

      <div className="content-container">
        <div className="meeting-info-box">
          <div className="meeting-info-title1">Budowanie </div>
          <div className="meeting-info-title2">społecznosci intencjonalnej</div>
          <div className="meeting-info-subtitle">
            nauka i łączenie się -{" "}
            <span className="red"> spotkanie na żywo :)</span>
          </div>
          <div className="meeting-info-subtitle2">
            Rydzewo (Giżycko) 28 września - 5 października
          </div>
          <div className="meeting-info-text">
            <p>
              Spotykamy się, żeby{" "}
              <span className="bold">
                poznać inne osoby, które marzą o stworzeniu grupy ludzi, których
                łączą podobne wartości i chcą żyć razem (społeczność
                intencjonalna)
              </span>{" "}
              i{" "}
              <span className="bold">
                poznanie najlepszych sposobów na zbudowanie takiej społeczności
              </span>
            </p>

            <p>
              Spotykamy się, by spędzić razem czas, odpocząć{" "}
              <span className="bold">w naturze,</span> , zobaczyć co nas łączy i
              nauczyć się więcej o budowaniu społeczności z{" "}
              <span className="bold">
                przygotowanych przez nas materiłów, od siebie nawzajem i od
                zaproszonych gości.
              </span>
              .
            </p>

            <p>
              Mamy też większy cel, jakim jest stworzenie grupy/grup, które będą
              chciały rozpocząć
              <span className="bold">
                proces budowania społeczności w 2023{" "}
              </span>{" "}
              :)
              <p className="link">przewiń w dół aby dowiedzieć się więcej</p>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="photos" className="main-page-container-place-photos">
      {photos.map((photo) => (
        <img key={photo} width="3" className="image-gallery" src={photo} />
      ))}
    </div>
    <div id="questions" className="main-page-container-las-main">
      <p>Intersuje Cię temat budowania społeczności?</p>
      <p>Chcesz zobaczyć, czy to dla Ciebie?</p>
      <p>Chcesz poznać innych o podobnych marzeniach i planach?</p>
      <p>
        Bliskie są Ci wartości takie jak pomoc innym, wspólnota, natura, piękno,
        różnorodność, rozwój i unschooling?
      </p>
      <p> </p>
      <p>Spotkajmy się! :)</p>
      <p> ---</p>
    </div>
    <div id="description" className="main-page-container-info">
      <div className="info-questions-box">
        <div className="info-questions">
          <p className="kolor"> KIEDY </p>{" "}
          <p> Spotkanie odbywa się między 28 września a 5 października.</p>{" "}
          <p>
            Możesz przyjechać na cały pobyt lub dowolnego dnia przed weekendem i
            wyjechać kiedykolwiek po weekendzie :){" "}
          </p>
          <p className="kolor"> GDZIE </p>{" "}
          <p>
            {" "}
            Spotkamy się i będziemy mieszkać w Rydzewie koło Giżycka (dokładny
            adres prześlemy Ci po zarejestrowaniu)
          </p>
          <p className="kolor"> CO BĘDZIEMY ROBIĆ </p>
          <p>
            <span className="kolor">W TYGODNIU</span> - odpoczywamy, spędzamy
            czas w przyrodzie, bawimy się, jeździmy na rowerach, pływamy,
            dyskutujemy, muzykujemy, urządzamy dla siebie nawzajem warsztaty,
            zabawy, spędzamy wieczory przy kominku, nic nie robimy :)
          </p>
          <p>
            <span className="kolor">W WEEKEND</span> - uczymy się, dzielimy
            wiedzą o tym jak budować społeczności, w swoim kręgu i z
            zaproszonymi gośćmi
          </p>
          <p>
            <span className="kolor">NA NAJBLIŻSZYM SPOTKANIU</span> - między
            innymi: "czemu 90% tworzących się społecznośźci rozpada się", "ilu
            założycieli potrzeba aby rozpocząć", "co to jest wizja, a co to jest
            misja", "przegląd istniejących społecznośći, ich wizje, misje i
            zasady"{" "}
          </p>
          <p className="kolor"> ILE TO KOSZTUJE I GDZIE SIĘ MOŻNA ZAPISAĆ </p>
          <p>
            {" "}
            Udział w spotkaniu to 50zł od osoby, niezależnie od długości pobytu.
            Jest to składka na weekendowe jedzenie (wegańskie) i zużycie wody i
            prądu.
          </p>
          <p>
            {" "}
            Jeśli opłata za udział jest dla Ciebie problemem, daj nam znać,
            spróbujemy coś wymyślić.
          </p>
          <p className="kolor"> REJESTRACJA </p>
          <p>
            Zarejestrujesz się{" "}
            <a href="https://forms.gle/K2Cguq6TmdchP3Qt5" className="red">tutaj</a>
          </p>
          <p>Jeśli nie chcesz używać Google, możesz napisać do nas maila.</p>
          <p>
            Z odpowiedziami na <a href="/aboutus#questions">te pytania.</a>/
          </p>
        </div>
        <div className="info-questions">
          <p className="kolor"> DLA KOGO </p>{" "}
          <p>
            {" "}
            Dla wszystkich osób w wieku 12-120 lat, które zainteresowane są
            tematem budowania społeczności i chcą wziąć czynny udział w
            spotkaniu.
          </p>{" "}
          <p className="kolor"> CZY SĄ JAKIEŚ ZASADY? </p>{" "}
          <p> Twoje ciało i Twój czas należą do Ciebie.</p>
          <p>Sam/a decydujesz jak spędzasz swój czas.</p>
          <p>Bierzesz udział tylko w tych aktywnościach, w których chcesz.</p>
          <p>
            Zwracaj uwagę na to, jak się czujesz, czego potrzebujesz. Pytaj,
            jeśli chcesz dowiedzieć się, jak czują się i czego potrzebują inni.
          </p>
          <p>Zależy nam na stworzeniu bezpiecznej przestrzeni.</p>
          <p className="kolor">
            {" "}
            Z KIM MOŻNA SIĘ SKONTAKTOWAĆ, ŻEBY UZYSKAĆ WIĘCEJ INFORMACJI?{" "}
          </p>
          <p>
            Pobyt organizuje{" "}
            <a href="/aboutus" className="kolor">
              {" "}
              Talita{" "}
            </a>
            . Jeśli masz jakiekolwiek pytania, napisz:{" "}
            <span className="kolor">
              {" "}
              regenerativecommunity@protonmail.com{" "}
            </span>
          </p>
          <p className="kolor">
            <a href="#" className="red">Wydarzenie na facebooku.</a>
          </p>
        </div>
      </div>
    </div>
    <div id="questions" className="main-page-container-join">
      <img className="picure-help-big" src="https://i.ibb.co/pr2bFB8/Screenshot-from-2022-09-16-05-24-06.png" />
      <div className="join-box">
      <p className="kolor">Chcesz się przyłączyć do organizacji spotkania?</p>
      <ul>
        <li>zabierz ze sobą instrument</li>
        <li>
          zorganizuj warsztaty, joga, medytacja, malowanie, szydełkowanie,
          budowanie rakiet kosmicznych, co tylko wymyślisz
        </li>
        <li>
          przyjedź wcześniej i pomóż w dumpster divingu
        </li>
        <li>
          daj nam znać, czy chcesz przybyć samochodem, może być pomocny do
          odbierania ludzi ze stacji
        </li>
        <li>a może coś jeszcze innego? :)</li>
      </ul>
      <p>
        Napisz nam w mailu lub formularzu zgłoszenia o swoich chęciach. Pomoże
        to w organizacji.
      </p>
      </div>
    </div>
  </div>
);

export default Home;
