import { useEffect, useState } from "react";
import Banner from "../../components/Banner/banner";
import Pc from "../../components/Pc/pc"
import Bulle from "../../components/bulle/Bulle";
//import Image from "../../images/macbookpro.png";
import Image2 from "../../images/carte3.jpg";
import Carte from "../../components/Carte/carte";
import Data from "../../datas/carteDataServices.json";
import "./CreationDeContenu.scss"

// Import des images
import carte11 from "../../images/redaction-Design.jpg";
import carte22 from "../../images/mise-en-forme.webp";
import carte33 from "../../images/illustration.jpg";

// Mapping des identifiants d'images aux importations
const images = {
  carte11,
  carte22,
  carte33,
};

function ServicePoge1() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Set the data directly from the imported JSON
    setServices(Data.services3);
  }, []);
  return (
    <>
      <Banner 
        title="Creation de contenu" 
        //subtitle="Nous créons des sites web modernes et performants"
      />
      <section className="section1">
        <Pc
          //Image={Image}
          Image2={Image2}
        />
        <Bulle
          texte="Contenu créatif pour des résultats percutants"
          size="22px"
        />
        <div className="bulle-section">
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
  )
}

export default ServicePoge1