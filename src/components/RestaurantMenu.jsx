import React, { Fragment, useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { CDN_URL,MENU_API } from '../utils/constants';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {

    const [resMenu,setResMenu]=useState(null)

    const {resId} = useParams();


    useEffect(()=>{
        fetchMenu();

    },[])

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API+resId)
        const json =await data.json();
       
        setResMenu(json.data)

    };
    if(resMenu === null) return <Shimmer/>;

    const {name,cuisines,avgRating,costForTwoMessage,cloudinaryImageId} = resMenu?.cards[2]?.card?.card?.info;

    const {itemCards} = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
     
    console.log(itemCards);
    console.log(resMenu?.cards);
    console.log(resMenu?.cards[4]?.groupedCard);
    console.log(resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

   
   
  return (
    <div className='menu'>
        <img src={CDN_URL+cloudinaryImageId} alt="" height={300} />
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h3><span>{avgRating}</span>stars ---- <span>{costForTwoMessage}</span></h3>
        <h2>Menu</h2>
        <ul>
            {itemCards?.map(item=>
            {
            return <Fragment key={item.card.info.id}>
            <li>{item.card.info.name} </li> 
            <h4>{item.card.info.description}</h4>
            <h5>{item.card.info.category}</h5>
            <h5>Price : {(item.card.info.price/100)}</h5>
            </Fragment>
            }
            )}
        </ul>
        
    </div>
  )
}

export default RestaurantMenu