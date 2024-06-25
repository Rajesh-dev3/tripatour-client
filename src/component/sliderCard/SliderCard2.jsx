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
    <a href="#">

    <div className="slider-card2" onClick={()=>navHandler(data?._id)}>
      <div className="top-col" style={{ backgroundImage: `url(${data?.images})` }}>
        {/* <img src={cardImage}/> */}
        {/* <img src={data?.image}/> */}
      </div>
      <div className="bottom-col">
        <h4 className="card-heading">{data?.name}</h4>
        <p>{data?.description}</p>
        <span>AED {data?.price}</span>
      </div>
    </div>
    </a>
  );
};

export default SliderCard2;
