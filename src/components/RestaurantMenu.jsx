import React, { div } from 'react'
import Shimmer from './Shimmer';
import { CDN_URL,MENU_IMG_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';
import useResData from '../utils/useResData';
import RestaurantCategory from './RestaurantCategory';


const RestaurantMenu = () => {

  

    const {resId} = useParams();
    const resMenu = useResData(resId);


   
    if(resMenu === null) return <Shimmer/>;

    const {name,cuisines,avgRating,costForTwoMessage,cloudinaryImageId} = resMenu?.cards[2]?.card?.card?.info;

    const {itemCards} = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
     
    const category = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter
    (c => c.card?.card?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    
    console.log(category);
   
   
  return (
    <div className='bg-yellow-50'>
    <div className='w-1/2 mx-auto '>
    <div className='my-8'>
        <img src={CDN_URL+cloudinaryImageId} alt="" className='w-[250px] h-[250px] rounded-lg' />
        <div className='border border-blue-800 p-4 my-4 w-1/2 rounded-lg shadow-2xl'>
        <h1 className='text-6xl text-blue-900 my-4'>{name}</h1>
        <h2 className='font-semibold text-lg'>{cuisines.join(", ")}</h2>
        <h3 className='my-4 font-bold'><span className='text-green-700'>{avgRating}stars</span> ---- <span>{costForTwoMessage}</span></h3>
        <h2 className='text-2xl font-bold text-red-900'>Menu :</h2>
        </div>
        
        
        
    </div>
         {
            category.map((category,index)=>{
              return <RestaurantCategory key={index} category={category?.card?.card}/>

            })
          }
         
    </div>
    </div>
  )
}

export default RestaurantMenu