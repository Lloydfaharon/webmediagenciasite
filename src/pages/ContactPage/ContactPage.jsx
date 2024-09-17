import Banner from "../../components/Banner/banner";
import Contacte from "../../components/Contacte/contacte";
import Bulle from "../../components/bulle/Bulle";
import Image from "../../images/ imgcontact4.jpg";
import "./ContactPage.scss";

function ContactPage() {
  return (
    <>
      <div className="contactpage-container">
        <Banner title="Prenez contact avec nous" />
        <div className="titreSection">
          <h2>Vous avez des questions ?</h2>
          <p>Nous avons les réponses !</p>
        </div>
        <Contacte Image={Image} className="groupe1"/>
        <Bulle texte="Les solutions qui boostent votre activité"/>
      </div>
    </>
  );
}

export default ContactPage;
