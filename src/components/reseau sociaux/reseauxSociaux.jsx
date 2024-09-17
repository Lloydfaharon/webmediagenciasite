
import "./reseauxSociaux.scss"


 // Import des images
import Image from "../../images/facebook.png";
import Image2 from "../../images/instagram.png";
import Image3 from "../../images/Twitter.png";


function reseauxSociaux() {
  return (
    <div className="containeur">
        <div className="sous-containeur">
            <h2>Rejoignez nous sur les réseaux sociaux</h2>
            <div className="image-reseaux">
                <img src= {Image} alt="réseaux sociaux" />
                <img src= {Image2} alt="réseaux sociaux" />
                <img src= {Image3} alt="réseaux sociaux" />
            </div>
        </div>
    </div>
  )
}

export default reseauxSociaux