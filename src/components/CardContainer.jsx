import biriyani from './../../assets/biriyani.jpeg'
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
      <div className='card-container'>
        
          <img className='img' src={CDN_URL+cloudinaryImageId} height={200}/>
          <h4>{name}</h4>
          <h4>{cuisines.join(",")}</h4>
          <h6>{sla.slaString}</h6>
          <h4>{costForTwo} for two</h4>
          <h4>{avgRating} stars</h4>
          
        
      </div>
    )
  }

export default CardContainer;