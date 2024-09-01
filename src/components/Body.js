import resdata from "../utils/mockData";
import Card from "./Card";
import {useState} from "react";


const Body = () => {
    const[resname,setResName]=useState(
        resdata
    )
    return (
      <div className="body">
        <div className="Filter">
         <button className="filter-btn" onClick={()=>{
            let top=4.5
            const filteredData=resname.filter((res)=>
                res.info.avgRating>=top
            )
            console.log(filteredData)
            setResName(filteredData)
         }}>Top Rated Restaurants</button>
        </div>
  
        <div className="card-div">
         {
         resname.map((each)=>{
          return <Card key={each.info.id} restrauntName={each.info.name} cloudinaryImageId={each.info.cloudinaryImageId} ratings={each.info.avgRating}/>
         })
        }
        
        </div>
      </div>
    );
  };

  export default Body;