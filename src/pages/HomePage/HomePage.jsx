import "./HomePage.scss";
import { useEffect, useState } from "react";
import Banner from "../../components/Banner/banner";
import Bulle from "../../components/bulle/Bulle";
import Carte from "../../components/Carte/carte";
import Contacte from "../../components/Contacte/contacte";
import ReseauxSociaux from "../../components/reseau sociaux/reseauxSociaux";
import Data from "../../datas/carteData.json";
import Image from "../../images/contact.jpg";

// Import des images
import carte1 from "../../images/carte1.jpg";
import carte2 from "../../images/carte2.jpg";
import carte3 from "../../images/carte3.jpg";
import carte4 from "../../images/carte4.jpg";

// Mapping des identifiants d'images aux importations
const images = {
  carte1,
  carte2,
  carte3,
  carte4,
};

function HomePage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Set the data directly from the imported JSON
    setServices(Data);
  }, []);

  return (
    <>
      <Banner 
        title="Agence Web & Marketing Digital"
      />
      <Bulle 
        texte="La visibilité est la clé de la réussite."
        
      />
      <section className="section-bulle">
        <div className="section-services" id="services">
          <h2 className="section-services-titre">Nos services</h2>
          <div className="services-container">
            {services.map((service) => (
              <Carte
                key={service.id}
                title={service.title}
                image={images[service.image]}
                description={service.description}
                link={service.link}
                btn="En savoir plus"
                
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section-contact" id="contact">
        <h2 className="section-services-titre">Contactez-nous</h2>
        <Contacte 
          Image={Image}
        />
      </section>
      <section>
        <ReseauxSociaux/>
      </section>
    </>
  );
}

export default HomePage;
