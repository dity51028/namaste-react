import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({category,showItems,setShowIndex}) => {
   // console.log(category);

   
   const handleClick = () =>{
   setShowIndex();

   }
  return (
    <div>
        <div className='bg-pink-200 shadow-lg my-8 p-3 flex justify-between hover:cursor-pointer' onClick={handleClick}>
        <span className='font-bold'>{category.title}({category.itemCards.length})</span>
        <span>⬇️</span>
        </div>
         {showItems && <ItemList data={category.itemCards}/>}

    </div>
  )
}

export default RestaurantCategory