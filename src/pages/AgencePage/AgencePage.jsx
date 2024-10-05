import "./AgencePage.scss";
import ImageGt from "../../images/group-travaille.webp";
import { Link } from "react-router-dom";

function AgencePage() {
  return (
    <>
      <div className="containeur-principal">
        <img className="groupImg" src={ImageGt} alt="groupeImage" />
        <div className="all-section-div">
          <div className="section-div">
            <h2>Qui sommes-nous ?</h2>
            <p>
              Bienvenue chez Webmediagencia, votre partenaire de confiance en
              web et marketing digital.
              <br /> Nous sommes une équipe passionnée de créatifs, de stratèges
              et de techniciens, réunis autour <br />d &apos;une mission commune
              : propulser votre entreprise vers de nouveaux sommets dans le
              monde <br />
              numérique.
            </p>
          </div>
          <div className="section-div">
            <h2>Notre Mission</h2>
            <p>
              Chez Webmediagencia, nous croyons en la puissance du digital pour
              transformer les entreprises.
              <br /> Notre mission est de créer des expériences en ligne
              mémorables et engageantes qui captivent votre
              <br /> audience et convertissent les visiteurs en clients fidèles.
            </p>
          </div>
          <div className="section-div">
            <h2>Pourquoi nous choisir ?</h2>
            <ul>
              <li>
                <strong>Expertise et Innovation</strong>: Avec des années
                d&apos;expérience dans le domaine, notre équipe <br />
                maîtrise les dernières tendances et technologies pour vous
                offrir des solutions à la pointe de <br /> l&apos;innovation.
              </li>
              <li>
                <strong>Approche Personnalisée</strong>: Nous savons que chaque
                entreprise est unique. <br />
                C&apos;est pourquoi nous prenons le temps de comprendre vos
                besoins spécifiques et de concevoir <br />
                des stratégies sur mesure qui répondent à vos objectifs.
              </li>
              <li>
                <strong>Résultats Mesurables </strong>: Nous nous engageons à
                fournir des résultats tangibles. <br />
                Grâce à nos analyses approfondies et à notre suivi rigoureux,{" "}
                <br />
                nous assurons la performance optimale de vos campagnes.
              </li>
              <li>
                <strong>Engagement Client</strong>: Votre succès est notre
                priorité. Nous travaillons en étroite collaboration avec vous,
                <br /> en vous tenant informé à chaque étape et en adaptant nos
                stratégies en fonction de vos retours.
              </li>
            </ul>
          </div>
          <div className="section-div">
            <h2>Contactez-nous</h2>
            <p>
              Laissez-nous vous aider à écrire le prochain chapitre de votre
              succès digital.
              <br />
              Ecrivez-nous dès aujourd&apos;hui et découvrons ensemble comment
              nous pouvons transformer votre vision en réalité.
            </p>
          </div>
          <div className="section-div">
            <button>
              <Link to="/contact">
                <h2>Prenez rendez-vous </h2>
              </Link>
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default AgencePage;
