import { Card_Url } from "../utils/constants";

const Card = ({restrauntName,cloudinaryImageId,ratings}) => {
    return (
      <div className="card">
        <img
          className="card-img"
          src={`${Card_Url}${cloudinaryImageId}`}
        ></img>
        <h3>{restrauntName}</h3>
        <h3>{ratings} Stars</h3>
      </div>
    );
  };

  export default Card;