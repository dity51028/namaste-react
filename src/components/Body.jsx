import CardContainer from "./CardContainer";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";



const Body = () => {

  const [listOfResturants,setListOfResturants] = useState([]);

  useEffect(() => {
   fetchData();
  },[])

  const fetchData = async () =>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
  

  const json = await data.json();
  console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  setListOfResturants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  
  };
   
  /*conditional rendering*/
 /* if (listOfResturants.length===0){
    return <Shimmer/>
  }*/
  
  
    return ( 
      <div className='body'>
        <div className="filter">
          <button
          className="filter-btn"
          onClick={()=>{
            console.log("button clicked");
            filteredList = listOfResturants.filter(res=>res.info.avgRating>4)
            console.log(filteredList);
            setListOfResturants(filteredList)
          }}
          >
            Top Rated Resturants
          </button>
        </div>
        
        <div className='res-container'>
          {listOfResturants.map((resturant)=>{
            return <CardContainer key={resturant.info.id} resData={resturant}/>
          })}
        
        </div>
        
  
      </div>
    )
  }
  export default Body;