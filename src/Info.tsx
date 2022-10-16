import "./Info.styles.scss";

const Info = () => (
  <div className="info-container">
    <div className="info-box">
      <p className="kolor">
        Odpowiedzi na rózne pytania. W razie niejasności, chętnie odpowiemy na
        wszystkie pytania mailowo: startingcommunity@proton.me
      </p>
      <p className="kolor">Termin spotkania</p>
      <p>
        Spotkanie będzie trwać od 2go do 9go listopada. Intensywniejsze
        spotkania i zajęcia odbędą sie w weekend 5-6 listopada. Termin przyjazdu
        i wyjazdu jest mniej więcej dowolny. Chcemy, żeby była tu i przestrzeń
        na spokojne bycie razem i nic nierobienie, jak i na intensywniejsze
        zajęcia. Dlatego zapraszamy na cały tydzień, część tygodnia, jak i na
        dołaczenie tylko na weekend.
      </p>

      <p className="kolor">Ile osób weźmie udział w spotkaniu?</p>
      <p>
        {" "}
        Limit miejsc do spania to 12-16, w związku z tym będziemy spędzać czas w
        dosyć kameralnej grupie.
      </p>

      <p className="kolor">Dla kogo jest spotkanie</p>
      <p>
        {" "}
        Zapraszamy wszystkich, którzy chcieliby wziąć czynny udział w spotkaniu.{" "}
      </p>
      <p>
        Nie musisz mieć planów na budowę społeczności, nie musisz do końca
        wiedzieć czego chcesz, jeśli temat budowania społeczności jest bliski
        Twemu sercu - zapraszmy :){" "}
      </p>
      <p>
        Z racji limitu miejsc, jak i wielkości miejsca na spotkania, niestety
        nie mamy możliwości goszczenia małych dzieci.{" "}
      </p>

      <p className="kolor">Czy moge przyjechać ze zwierzątkiem?</p>
      <p>
        Niestety nie mamy możliwości gościć zwierząt. (ale jesli nie masz innej
        opcji, napisz do nas, zobaczymy co da się zrobić)
      </p>
      <p className="kolor">Gdzie będziemy spać</p>
      <p>
        Mamy do dyspozycji dwuosobowe pokoje z wygodnymi łóżkami. Ogrzewane i z
        dostępem do kilku łazienek i kuchni.
      </p>

      <p className="kolor">Co jemy</p>
      <p>
        W weekend jemy wspólnie przygotowane tutaj śniadania, obiady i kolacje
        (czyli na dwa dni, posiłki sa zapewnione przez nas). I duuuzo smoothie!
      </p>
      <p>
        Z racji tego, że w naszej przestrzeni nie spozywamy produktów
        pochodzenia zwierzęcego, wszystkie posiłki będą wegańskie. Jeśli masz
        jakieś potrzeby co do diety, daj nam znać.
      </p>
      <p>W pozostałe dni do dyspozycji jest dobrze wyposażona kuchnia.</p>
      <p>Prosimy o nieprzywożenie męsnych produktów spozywczych.</p>
    </div>
  </div>
);

export default Info;
