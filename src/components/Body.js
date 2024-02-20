import { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [filteredListRest, setfilteredListRest] = useState([]);
  const [searchText, setsearchText] = useState("");
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5691957&lng=77.2886424&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListofRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredListRest(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="search"
          onClick={() => {
            const filteredList = listofRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredListRest(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = listofRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setfilteredListRest(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredListRest.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
