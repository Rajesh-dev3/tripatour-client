import { cardImage } from "../../assets/images";
////styles
import "./styles.scss";
const SliderCard = ({ data }) => {
  return (
    <div className="slider-card">
      <div className="top-col" style={{ backgroundImage: `url(${cardImage})` }}>
        {/* <img src={cardImage}/> */}
        {/* <img src={data?.image}/> */}
      </div>
      <div className="bottom-col">
        <h4 className="card-heading">{data?.description}</h4>
        <p>{data?.timing} · Kymco/Grizzly 350CC</p>
        <span>AED {data?.price}</span>
      </div>
    </div>
  );
};

export default SliderCard;
