import CardContainer from "./CardContainer";


const Body = () => {
    return (
      <div className='body'>
        <div>Search</div>
        <div className='res-container'>
          <CardContainer
          resName = "Aminia"
          cuisine = "North Indian, Biriyani"
          time = "30 min"
          price = "600 for two"/>
          <CardContainer
          resName = "Arsalan"
          cuisine = "kebabs, Biriyani"
          time = "32 min"
          price = "700 for two"/>
          <CardContainer
          resName = "kfc"
          cuisine = "snacks, colddrinks"
          time = "45 min"
          price = "500 for two"/>
        
        </div>
        
  
      </div>
    )
  }
  export default Body;