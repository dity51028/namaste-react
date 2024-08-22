import CardContainer from "./CardContainer";
import { useState,useEffect } from "react";



const Body = () => {

  const [listOfResturants,setListOfResturants] = useState([
    {
    data:{
      id:"12345",
      name:'KFC',
      cuisine:["burger","biriyani","snacks"],
      costForTwo:4000,
      deliveryTime:36,
      avgRating:"3.8"
    }
  },
    {
      data:
      {
      id:"12346",
      name:'Dominos',
      cuisine:["burger","chicken-wings","snacks"],
      costForTwo:4500,
      deliveryTime:36,
      avgRating:"4.2"
      }
    },
    {
      data:
      {
      id:"12347",
      name:'MCD',
      cuisine:["burger","chicken-wings","snacks"],
      costForTwo:500,
      deliveryTime:40,
      avgRating:"4.5"
      }
    },
  
  ]);

  useEffect(() => {
   fetchData();
  },[])

  const fetchData = async () =>{
    const data = await fetch(
      "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2"
      );
  

  const json = await data.json();
  console.log(json);

  
  };
  
  
    return (
      <div className='body'>
        <div className="filter">
          <button
          className="filter-btn"
          onClick={()=>{
            console.log("button clicked");
            filteredList = listOfResturants.filter(res=>res.data.avgRating>4)
            console.log(filteredList);
            setListOfResturants(filteredList)
          }}
          >
            Top Rated Resturants
          </button>
        </div>
        <div className='res-container'>
          {listOfResturants.map((resturant)=>{
            <CardContainer key={resturant.data.id} resData={resturant}/>
          })}
        
        </div>
        
  
      </div>
    )
  }
  export default Body;