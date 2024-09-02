import React, { div } from 'react'
import Shimmer from './Shimmer';
import { CDN_URL,MENU_IMG_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';
import useResData from '../utils/useResData';

const RestaurantMenu = () => {

  

    const {resId} = useParams();
    const resMenu = useResData(resId);


   
    if(resMenu === null) return <Shimmer/>;

    const {name,cuisines,avgRating,costForTwoMessage,cloudinaryImageId} = resMenu?.cards[2]?.card?.card?.info;

    const {itemCards} = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
     
    

   
   
  return (
    <div className='bg-yellow-50'>
    <div className='my-8 mx-8 '>
        <img src={CDN_URL+cloudinaryImageId} alt="" className='w-[250px] h-[250px]  rounded-lg' />
        <div className='border border-blue-800 p-4 my-4 w-1/2 rounded-lg shadow-2xl'>
        <h1 className='text-6xl text-blue-900 my-4'>{name}</h1>
        <h2 className='font-semibold text-lg'>{cuisines.join(", ")}</h2>
        <h3 className='my-4 font-bold'><span className='text-green-700'>{avgRating}stars</span> ---- <span>{costForTwoMessage}</span></h3>
        <h2 className='text-2xl font-bold text-red-900'>Menu :</h2>
        </div>
        
        <ul >
            {itemCards?.map(item=>
            {
            return <div className='bg-slate-200 w-1/2'  key={item.card.info.id}>
            
            <li className='my-8 p-4 bg-slate-500 text-white font-bold text-xl'>{item.card.info.name} </li> 
            <div className='flex'>
            
            <div>
            <h4 className='p-2'>{item.card.info.description}</h4>
            <h5 className='p-2'>{item.card.info.category}</h5>
            <h5 className='p-2'>Price : Rs. {(item.card.info.price/100)} /-</h5>
            </div>
            <div className='py-2'>
            <img className='w-[250px] h-[150px] p-4' src={MENU_IMG_URL+item.card.info.imageId} alt="Menu_Img" />
            <button className='bg-white w-[80px] h-[40px] mx-6 rounded-lg hover:bg-slate-300'>Add</button>
            </div>
            </div>
            
            
            </div>
            }
            )}
        </ul>
        
    </div>
    </div>
  )
}

export default RestaurantMenu