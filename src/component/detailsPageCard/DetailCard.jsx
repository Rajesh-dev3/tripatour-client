import React from "react";
////styles
import "./styles.scss";
const DetailCard = ({ name, list }) => {
  return (
    <div className="detail-card">
      <h2>{name}</h2>
      <ul>
        {list.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default DetailCard;
