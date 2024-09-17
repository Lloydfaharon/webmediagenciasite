import { useEffect, useState } from "react";
import Banner from "../../components/Banner/banner";
import Bulle from "../../components/bulle/Bulle";
import Image from "../../images/macbookpro.png";
import Image2 from "../../images/carte4.jpg";
import Pc from "../../components/Pc/pc"
import Carte from "../../components/Carte/carte";
import Data from "../../datas/carteDataServices.json";
import "./DesignEtBranding.scss"

// Import des images
import carte11 from "../../images/Identite-visuelle-logo.webp";
import carte22 from "../../images/naming.jpg";
import carte33 from "../../images/iconographie.jpg";
import carte44 from "../../images/Montage-Photo-video.jpg";

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
    setServices(Data.services4);
  }, []);
  return (
    <>
    <Banner 
      title="Design et Branding" 
      //subtitle="Nous créons des sites web modernes et performants"
    />
    <section className="section1">
      {/* <div className="boximagece">
        <img src= {Image} alt="macbookpro" className="imagecentre22"/>
        <img src= {Image2} alt="macbookpro" className="imagecentre2"/>

      </div> */}
      <Pc
        Image={Image}
        Image2={Image2}
      />
      <Bulle
        texte="L'identité visuelle au service de votre succès!"
          size="22px"
      />
      <div className="bulle-section2">
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