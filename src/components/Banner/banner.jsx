import "./banner.scss";
import imageSrc from "../../images/banner.png";

function banner({title}) {
  return (
    <div className="banner-box">
      <div className="banner-box-img">
        <img className="banner_img" src={imageSrc} alt="banner" />
      </div>
      <div className="banner-box-txt">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default banner;
