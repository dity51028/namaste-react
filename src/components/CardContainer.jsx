import biriyani from './../../assets/biriyani.jpeg'


const CardContainer = (props) =>{
  const {resdata} = props;
  const {
    name,
    avgRating,
    cuisine,
    costForTwo,
    deliveryTime,

  } = resdata?.data
    return(
      <div className='card-container'>
        
          <img className='img' src={biriyani}/>
          <h3>{name}</h3>
          <h4>{cuisine}</h4>
          <h6>{deliveryTime}</h6>
          <h6>{costForTwo/100} for two</h6>
          <h6>{avgRating}</h6>
        
      </div>
    )
  }

export default CardContainer;