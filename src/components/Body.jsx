import CardContainer from "./CardContainer";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useSatus from "../utils/useStatus";



const Body = () => {

  const [listOfResturants,setListOfResturants] = useState([]);
  const [searchText,setSearchText] = useState("");
  const [filterRes, setFilterRes] = useState ([])

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
  setFilterRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  };
   
  /*conditional rendering*/
 /* if (listOfResturants.length===0){
    return <Shimmer/>
  }*/
  
   const onlineSts = useSatus();
   if(onlineSts === false) return <h1>You're offline!!! PLease check your connection</h1>

    return listOfResturants.length===0 ? <Shimmer/> : ( 
      <div className='body'>
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input 
            type="text" 
            className="border border-solid border-blue py-2" 
            value={searchText}
            placeholder="Enter restaurant name"
            onChange={(e)=>setSearchText(e.target.value)}
            
            />
            
            <button 
              className="px-4 py-2 bg-blue-300 m-4 rounded-lg"
              onClick={()=>{
                 const filteredList = listOfResturants.filter((res)=>
                  res.info.name.toLowerCase().includes( searchText.toLowerCase())
                 );
                 setFilterRes(filteredList)

           }} >
            Search
           </button>
           
          </div>
          <div>
          <button
          className="filter-btn px-4 py-2 bg-slate-400 my-12 rounded-lg"
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
         
        </div>
        
        <div className='flex flex-wrap'>
          {filterRes.map((resturant)=>{
            return <Link 
            key={resturant.info.id}
            to={'/restaurant/'+resturant.info.id}> <CardContainer  resData={resturant}/></Link>
          })}
        
        </div>
        
  
      </div>
    )
  }
  export default Body;