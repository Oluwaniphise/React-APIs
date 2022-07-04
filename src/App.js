
import WeatherApi from "./components/WeatherApi";
import GetState from "./components/GetState";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="">

    <Router>
     
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/lat-and-lon" element={<GetState/>} />
        <Route path="/weather" element={<WeatherApi/>} />
        </Routes>
     </Router>
     </div>

  )


}

export default App;
