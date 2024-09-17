import './Bulle.scss'; // Assurez-vous de créer et importer le fichier CSS
import PropTypes from 'prop-types';

function Bulle({ texte}) {
  return (
    <div className="bulle-container">
      <h2 className="bulle-text" >{texte}</h2>
    </div>
  );
}

// Validation des propriétés
Bulle.propTypes = {
  texte: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Bulle;

