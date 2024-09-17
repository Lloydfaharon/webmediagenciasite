import "./contacte.scss";
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contacte({ Image }) {
  const form = useRef();
  const [loading, setLoading] = useState(false); // Pour gérer l'état de chargement

  const sendEmail = (e) => {
    e.preventDefault();

    // Simple validation des champs du formulaire avant l'envoi
    const formData = new FormData(form.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      alert("Veuillez remplir tous les champs requis.");
      return;
    }

    setLoading(true); // Active le mode "chargement"

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
          <input type="text" name='name' placeholder="Nom et prénom" required />
          <input type="email" name='email' placeholder="E-mail" required />
          <input type="text" name='number' placeholder="Téléphone" />
          <input type="text" name='societe' placeholder="Société" />
          <textarea className="txtera" name='message' placeholder="Entrez votre message" required></textarea>
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
