import { useEffect, useState } from "react";
import Banner from "../../components/Banner/banner";
import Bulle from "../../components/bulle/Bulle";
import Image from "../../images/macbookpro.png";
import Image2 from "../../images/carte2 (2).jpg";
import Carte from "../../components/Carte/carte";
import Pc from "../../components/Pc/pc";
import Data from "../../datas/carteDataServices.json";
import "./marketingDigital.scss";

// Import des images
import carte11 from "../../images/communication.jpg";
import carte22 from "../../images/acquisition-prospect.jpg";
import carte33 from "../../images/strategies-marketing.webp";
import carte44 from "../../images/creation-contenus.webp";

// Mapping des identifiants d'images aux importations
const images = {
  carte11,
  carte22,
  carte33,
  carte44,
};

function ServicePoge1() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Set the data directly from the imported JSON
    setServices(Data.services2);
  }, []);
  return (
    <>
      <Banner
        title="Marketing digital"
        //subtitle="Nous créons des sites web modernes et performants"
      />
      <section className="section1">
        {/* <img src= {Image} alt="macbookpro" className="imagecentre"/>
        <div className="box-imagecentre22">
          <img src= {Image2} alt="macbookpro" className="imagecentre22"/>
        </div> */}
        <Pc Image={Image} Image2={Image2} />
        <Bulle
          texte="Propulsez votre entreprise vers le succès  !"
          size="22px"
        />
        <div className="cartesection">
          {services.map((service) => (
            <Carte
              key={service.id}
              title={service.title}
              image={images[service.image]}
              btn="Prendre rendez-vous"
              description={service.description}
              //link={service.link}
              link="/contact"
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default ServicePoge1;
