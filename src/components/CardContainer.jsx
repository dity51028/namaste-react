import { CDN_URL } from '../utils/constants';

const CardContainer = (props) =>{
 const {resData} = props;

  const {
    name,
    avgRating,
    cuisines,
    costForTwo,
    cloudinaryImageId,
    sla,

  } = resData?.info;
    return(
      <div className='m-4 p-4 w-[250px] bg-slate-300 rounded-lg'>
        
          <img className='img rounded-lg h-[200px] w-full' src={CDN_URL+cloudinaryImageId} />
          <h4 className='font-bold px-8 py-2'>{name}</h4>
          <h4>{cuisines.join(",")}</h4>
          <h6>{sla.slaString}</h6>
          <h4>{costForTwo} for two</h4>
          <h4>{avgRating} stars</h4>
          
        
      </div>
    )
  }

export default CardContainer;