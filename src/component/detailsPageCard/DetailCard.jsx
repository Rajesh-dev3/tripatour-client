import React from "react";
////styles
import "./styles.scss";
const DetailCard = ({ name, list }) => {
  return (
    <div className="detail-card">
      <h2>{name}</h2>
      <ul>
      {/* {list?.map((item, index) => (
            <React.Fragment key={index}> */}
               <div dangerouslySetInnerHTML={{ __html: list }} />
            {/* </React.Fragment>
          ))} */}
      </ul>
    </div>
  );
};

export default DetailCard;
