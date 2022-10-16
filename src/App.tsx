import { Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import Contact from "./Contact";
import Home from "./Home";
import Info from "./Info";
import Meetings from "./Meetings";
import Goal from "./Goal";
import { useState } from "react";
import Projects from "./Projects";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div>
      <div className="top-menu">
        <div className="content">
          <div className="menu-item">
            <Link to="/">start</Link>
          </div>

          <div className="menu-item">
            <Link to="/meetings">spotkania</Link>
          </div>

          {/* <div className="menu-item">
            <Link to="/projects">projekty</Link>
          </div> */}

          <div className="menu-item">
            <Link to="/information">info</Link>
          </div>

          <div className="menu-item">
            <Link to="/aboutus">o nas</Link>
          </div>

          <div className="menu-item">
            <a
              href="https://forms.gle/K2Cguq6TmdchP3Qt5"
              className="red"
              target="_blank"
            >
              Dołącz!
            </a>
          </div>
        </div>
      </div>
      <div className="phone-menu" onClick={toggleMenu}>
        <img
          width="50"
          height="50"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiyFo-_Ey43Ud1OCPQ6xK-yUpf4f16Hj228w&usqp=CAU"
        />
      </div>
      {menuOpen && (
        <div className="phone-menu-list">
          <ul>
            <li>
              <div className="menu-item" onClick={toggleMenu}>
                <Link to="/">Start</Link>
              </div>
            </li>
            <li>
              <div className="menu-item" onClick={toggleMenu}>
                <Link to="/meetings">Spotkania</Link>
              </div>
            </li>
            {/* <li>
              <div className="menu-item" onClick={toggleMenu}>
                <Link to="/projects">Projekty</Link>
              </div>
            </li> */}
            <li>
              <div className="menu-item" onClick={toggleMenu}>
                <Link to="/information">Info</Link>
              </div>
            </li>
            <li>
              <div className="menu-item" onClick={toggleMenu}>
                <Link to="/aboutus">O nas</Link>
              </div>
            </li>

            <li>
              <div className="menu-item" onClick={toggleMenu}>
                <a
                  href="https://forms.gle/K2Cguq6TmdchP3Qt5"
                  className="red"
                  target="_blank"
                >
                  Dołącz!
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/information" element={<Info />}></Route>
        <Route path="/meetings" element={<Meetings />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/aboutus" element={<Contact />}></Route>
        <Route path="/goal" element={<Goal />}></Route>
      </Routes>
    </div>
  );
}

export default App;
