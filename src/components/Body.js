import Card from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resname, setResName] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setResName(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (resname.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="Filter">
        <div className="search">
          <input
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
              const filteredRes = resname.filter((res) => 
                res.info.name.includes(searchText)
              );
              console.log(filteredRes);
              setResName(filteredRes);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let top = 4.5;
            const filteredData = resname.filter(
              (res) => res.info.avgRating >= top
            );
            console.log(filteredData);
            setResName(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="card-div">
        {resname.map((each) => {
          return (
            <Card
              key={each.info.id}
              restrauntName={each.info.name}
              cloudinaryImageId={each.info.cloudinaryImageId}
              ratings={each.info.avgRating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
