import {useState} from 'react';
import axios from 'axios';
import '../state.css';


const GetState = () => {
  const [data, setData] = useState({});
  const [lon, setLon] = useState('');
  const[lat, setLat] = useState('');
  const[err, setErr] = useState('');
  const abortCont = new AbortController();

  const url = `https://api.openrouteservice.org/geocode/reverse?api_key=5b3ce3597851110001cf624833ccb80204884571b910a16b8f9957a0&point.lon=${lon}&point.lat=${lat}`;
  
const searchState = () =>{

  if ((lon.trim().length && lat.trim().length) !== 0){
    axios.get(url).then((res)=>{
      setData(res.data);
      console.log(res.data);
    }).catch(err =>{
      setTimeout(()=> {
        setErr(err.message);
      }, 1000)
  

    })
    setLon("")
    setLat("");
  }
  else{
    setErr("Fields can't be empty.")
  }
  
}
  
  
  return (
       
      <div className="container-state">
        <h2>Lat and Lon Checker</h2>
        <p style={{color:'red', fontSize:"0.9rem", marginBottom:'2rem'}}>{err && err}</p>
        <input type="text" placeholder="Enter lon" 
        value={lon} onChange={event => setLon(event.target.value)}
        required />
        <br />
        <input type="text" placeholder="Enter lat"
        value={lat} onChange={event => setLat(event.target.value)}
        required />

         <button onClick={searchState}>Check</button>


         <div className="details">
         Location: {data.features ? data.features[0].properties.label:null}

         </div>

         <em style={{marginTop:'3rem'}}>Samuel Emmanuel Onorouyiza gave me this task to learn how to CONSUME APIs 
          because he CREATES APIs and because he wasn't satisfied with the first 
          API project I did which he yawned at(that was the first React project I did which got me going into this wonderful Framework). 
          You see the c words? That's how you know papa Kumuyi pikins</em>
      </div>
      );
}
 
export default GetState;