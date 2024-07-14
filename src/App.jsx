import React,{useState} from 'react'
import axios from 'axios'

function App() {
  const [data,setData]=useState('');
  const [location,setLocation]=useState('');
  const URL=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f417b4c762f6ad8cec6ed30520e2adf6`

  function searchLocation(Event){
    if(Event.key=='Enter'){
      axios.get(URL).then(result=>{
        setData(result.data);
        console.log(data);
      })
      setLocation('');
    }
  }

  return (
      <div className='app'>
        <div className="search">
        <input 
          type="text" 
          value={location}
          onChange={Event=>{setLocation(Event.target.value)}}
          onKeyDown={searchLocation}
          placeholder='Enter Location'
        />
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main &&<h1>{data.main.temp}° C</h1>}
            </div>
            <div className="description">
              {data.weather &&<p className='bold'>{data.weather[0].main}</p>}
            </div>
          </div>
          {data.name &&<div className="bottom">
            <div className="feelslike">
              {data.main &&<p className='bold'>{data.main.feels_like}° C</p>}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main &&<p className='bold'>{data.main.humidity}%</p>}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind &&<p className='bold'>{data.wind.speed}Mph</p>}
              <p>Wind</p>
            </div>
          </div>}
        </div>
      </div>
  )
}

export default App
