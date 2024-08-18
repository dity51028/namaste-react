import biriyani from './../../assets/biriyani.jpeg'


const CardContainer = ({resName,cuisine,time,price}) =>{
    return(
      <div className='card-container'>
        
          <img className='img' src={biriyani}/>
          <h3>{resName}</h3>
          <h4>{cuisine}</h4>
          <h6>{time}</h6>
          <h6>{price}</h6>
        
      </div>
    )
  }

export default CardContainer;