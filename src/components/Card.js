import { Card_Url } from "../utils/constants";

const Card = ({restrauntName,cloudinaryImageId}) => {
    return (
      <div className="card">
        <img
          className="card-img"
          src={`${Card_Url}${cloudinaryImageId}`}
        ></img>
        <h3>{restrauntName}</h3>
        
      </div>
    );
  };

  export default Card;