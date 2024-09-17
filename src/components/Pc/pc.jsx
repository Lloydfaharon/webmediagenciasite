import "./Pc.scss"
import Image from "../../images/macbookpro.png"
// import Image2 from "../../images/carte3.jpg"

function pc({Image2}) {
  return (
    <div className="contener">
      <img src= {Image} alt="macbookpro" className="img2222"/>
      <img src= {Image2} alt="macbookpro" className="imagecentre222"/>
    </div>
  )
}

export default pc