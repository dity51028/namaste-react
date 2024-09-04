import React from 'react'
import { MENU_IMG_URL } from '../utils/constants.js';

const ItemList = ({data}) => {
  //console.log(data);
  return (
    <div>
       {data?.map(item=>
            {
            return <div className='bg-slate-200 '  key={item.card.info.id}>
            
            <li className='my-4 p-4 bg-slate-500 text-white font-bold text-xl'>{item.card.info.name} </li> 
            <div className='flex'>
            
            <div className='w-10/12'>
            <h4 className='p-2'>{item.card.info.description}</h4>
            <h5 className='p-2'>{item.card.info.category}</h5>
            <h5 className='p-2'>Price : Rs. {(item.card.info.price/100)} /-</h5>
            </div>
            <div className='py-2 w-2s/12'>
            <img className='w-[250px] h-[150px] p-4' src={MENU_IMG_URL+item.card.info.imageId} alt="Menu_Img" />
            <button className='bg-white w-[80px] h-[40px] rounded-lg hover:bg-slate-300'>Add</button>
            </div>
            </div>
            
            
            </div>
            }
            )}
    </div>
  )
}

export default ItemList