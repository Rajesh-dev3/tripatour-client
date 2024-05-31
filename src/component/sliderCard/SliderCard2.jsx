import { useNavigate } from "react-router-dom";
import { cardImage } from "../../assets/images";
////styles
import "./styles.scss";
const SliderCard2 = ({ data }) => {
  const nav = useNavigate()
  const navHandler = (url)=>{
    nav("/tour-detail/"+url)
  }
  return (
    <div className="slider-card2" onClick={()=>navHandler(data?._id)}>
      <div className="top-col" style={{ backgroundImage: `url(${cardImage})` }}>
        {/* <img src={cardImage}/> */}
        {/* <img src={data?.image}/> */}
      </div>
      <div className="bottom-col">
        <h4 className="card-heading">{data?.description}</h4>
        <p>{data?.timing} · Kymco/Grizzly 350CC</p>
        <span>{data?.price}</span>
      </div>
    </div>
  );
};

export default SliderCard2;
