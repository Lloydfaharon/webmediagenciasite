import "./carte.scss";
import {Link} from "react-router-dom"

function carte({ title, image, description,link,btn  }) {
  return (
    <div className="carte-box">
      <div className="carte-img">
        <img src={image} alt={title} />
      </div>
      <div className="carte-titre">
        <h2>{title}</h2>
      </div>
      <div className="carte-description">
        <ul>
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
      <Link to={link} className="carte-button">
        <h2>{btn}</h2>
      </Link>
    </div>
  );
}

export default carte;
