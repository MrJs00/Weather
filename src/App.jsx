import axios from 'axios';
import { useState } from 'react';





function App() {

//State for the API       
const [data,setData]=useState({})
//State for the Location
const [city,setCity]=useState('') 
//https://api.openweathermap.org/data/2.5/weather?q=madrid&appid=033c025b7146d94e88c7f8c26b097a3b

const APIK='033c025b7146d94e88c7f8c26b097a3b';
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIK}`


const Search =(event)=>{
//Search engine logic programming
if(event.key === 'Enter'){
  axios.get(url)
  .then((response)=>{
  //we update the state Data
  setData(response.data)
  console.log(response.data)
  setCity(response.data.main.name)
  console.log(city)
  })
  
}

}





  return (
    <div className="app">
    <div className='search'>
        <input
        value={city}
        onChange={event => setCity(event.target.value)}
        placeholder='Enter Location'
        onKeyPress={Search}
        type='text' />
    </div>

      <div className='container'>
        <div className='top'>
         <div className='location'><p>{data.name}</p></div>  
         <div className='temp'>
         {data.main ? <h1>{data.main.temp} ºF</h1> : null} 
         </div> 
          
         </div>
         <div className='description'>
          {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>

          {data.main != undefined &&
         <div className='bottom'>
         <div className='feels'>
           <p className='bold'>{data.main ? data.main.feels_like : null}ºF</p>
           <p >Feels like</p>
         </div>     
         <div className='humidity'>
         <p className='bold'>{data.main ? data.main.humidity : null } %</p>
         <p >humidity</p>
         </div>
         <div className='wind'>
          <p className='bold'>{data.wind ? data.wind.speed :null} MPH</p>
          <p >Wind Speed</p>
         </div>

         </div>
               
          }
          </div> 
    </div>   
       
         
  );
}

export default App;
