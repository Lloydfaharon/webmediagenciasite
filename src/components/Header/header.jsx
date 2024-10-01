import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import WmaLogo from "../../images/IMG_02687.png";
import "./header.scss";
import { useEffect, useState } from "react";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (event, target) => {
    event.preventDefault();
    if (location.pathname === "/") {
      document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { target } });
    }
    setMenuOpen(false);
  };
  

  useEffect(() => {
    if (location.state && location.state.target) {
      const target = location.state.target;
      document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="navigation">
      <Link to="/" className="logo-link">
        <img src={WmaLogo} className="logo" alt="Wma logo" />
      </Link>
      <div className="navigation-box">
        <div
          className="navigation-mobil"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li className="navigation-liste-li">
              <NavLink to="/">Menu</NavLink>
            </li>
            <li className="navigation-liste-li">
              <Link
                to="/"
                onClick={(event) => handleLinkClick(event, "#services")}
              >
                Services
              </Link>
            </li>
            <li className="navigation-liste-li">
              <NavLink to="/agence">Agence</NavLink>
            </li>
            <li className="navigation-liste-li">
              <NavLink
                to="/contact"
                onClick={(event) => handleLinkClick(event, "#contact")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
      </div>
    </div>
  );
}
