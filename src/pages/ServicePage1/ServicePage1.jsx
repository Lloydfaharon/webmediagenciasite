import { useEffect, useState } from "react";
import Banner from "../../components/Banner/banner";
import Bulle from "../../components/bulle/Bulle";
//import Image from "../../images/macbookpro.png";
import Image2 from "../../images/carte1.jpg";
import Carte from "../../components/Carte/carte";
import Pc from "../../components/Pc/pc";
import Data from "../../datas/carteDataServices.json";
import "./ServicePage1.scss";

// Import des images
import carte11 from "../../images/carte11.png";
import carte22 from "../../images/carte22.webp";
import carte33 from "../../images/carte33.png";
import carte44 from "../../images/carte44.png";

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
    setServices(Data.services1);
  }, []);
  return (
    <>
      <Banner
        title="Développement Web"
        //subtitle="Nous créons des sites web modernes et performants"
      />
      <section className="section1">
        {/* <img src={Image} alt="macbookpro" className="imagecentre" />
        <img src={Image2} alt="macbookpro" className="imagecentre2" /> */}
        <Pc
        //Image={Image}
        Image2={Image2}
        />
        <Bulle 
          texte="Transformer vos idées en réalité numérique !"
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
              link="/contact"
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default ServicePoge1;
