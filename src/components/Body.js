import resname from "../utils/mockData";
import Card from "./Card";
const Body = () => {
    return (
      <div className="body">
        <div className="search-container">
          <div className="search">
            <input
              type="search"
              className="search-bar"
              placeholder="Feed your tummy"
            ></input>
            <button className="search-button">Search</button>
          </div>
        </div>
  
        <div className="card-div">
         {
         resname.map((each)=>{
          return <Card restrauntName={each.info.name} cloudinaryImageId={each.info.cloudinaryImageId}/>
         })
        }
        
        </div>
      </div>
    );
  };

  export default Body;