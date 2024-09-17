import { Link, useLocation, useNavigate } from "react-router-dom";
import WmaLogo from "../../images/IMG_02687.png";
import "./header.scss";
import { useEffect } from "react";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (event, target) => {
    event.preventDefault();
    if (location.pathname === "/") {
      document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { target } });
    }
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
        <ul className="navigation-liste">
          <li className="navigation-liste-li">
            <Link to="/">Menu</Link>
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
            <Link to="/agence">Agence</Link>
          </li>
          <li className="navigation-liste-li">
            <Link
              to="/contact"
              onClick={(event) => handleLinkClick(event, "#contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
