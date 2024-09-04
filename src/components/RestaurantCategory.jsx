import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({category}) => {
   // console.log(category);

   const [showitems,setShowItems] = useState(false);
   const handleClick = () =>{
    setShowItems(!showitems)
   }
  return (
    <div>
        <div className='bg-pink-200 shadow-lg my-8 p-3 flex justify-between hover:cursor-pointer' onClick={handleClick}>
        <span className='font-bold'>{category.title}({category.itemCards.length})</span>
        <span>⬇️</span>
        </div>
         {showitems && <ItemList data={category.itemCards}/>}

    </div>
  )
}

export default RestaurantCategory