import "./contacte.scss";
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contacte({ Image }) {
  const form = useRef();
  const [loading, setLoading] = useState(false); // Pour gérer l'état de chargement
  const [csrfToken] = useState(() => {
    // Génération d'un jeton CSRF simple (côté client uniquement pour cet exemple)
    return Math.random().toString(36).substring(2);
  });

  // Fonction pour valider l'email avec regex côté client
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validation des champs avant l'envoi
    const formData = new FormData(form.current);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();
    const consent = formData.get('consent'); // Pour la conformité RGPD

    if (!name || !email || !message) {
      alert("Veuillez remplir tous les champs requis.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Veuillez entrer une adresse e-mail valide.");
      return;
    }

    if (!consent) {
      alert("Vous devez accepter les termes et conditions.");
      return;
    }

    setLoading(true); // Active le mode "chargement"

    // Ajoute le token CSRF dans le formulaire avant envoi
    formData.append('csrf_token', csrfToken);

    emailjs.sendForm('service_uftk24r', 'template_mvvzn9i', form.current, 'JFw_I59xyfvSUt2ir')
      .then((result) => {
          console.log(result.text);
          alert("Message envoyé avec succès !");
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          alert("Erreur lors de l'envoi du message.");
      })
      .finally(() => {
        setLoading(false); // Désactive le mode "chargement"
      });
  };

  return (
    <section id="contacte">
      <div className="contact-img">
        <img src={Image} alt="image de contact" />
      </div>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <input type="hidden" name="csrf_token" value={csrfToken} />
          <input type="text" name='name' placeholder="* Nom et prénom" required />
          <input type="email" name='email' placeholder="* E-mail" required />
          <input type="text" name='number' placeholder="Téléphone" pattern="^[0-9]*$" title="Seuls les chiffres sont autorisés" />
          <input type="text" name='societe' placeholder="Société" />
          <textarea className="txtera" name='message' placeholder="* Entrez votre message" required></textarea>

          {/* Ajout d'une case pour obtenir le consentement, conforme au RGPD */}
          <div className="consent">
            <input type="checkbox" name="consent" id="consent" required />
            <label htmlFor="consent">J&#39;accepte que mes données soient traitées conformément à la politique de confidentialité.</label>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </div>
    </section>
  );
}

Contacte.propTypes = {
  Image: PropTypes.string.isRequired // Assure que Image est une string et est obligatoire
};

export default Contacte;

