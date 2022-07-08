
import WeatherApi from "./components/WeatherApi";
import GetState from "./components/GetState";
import { Home } from "./components/Home";
import { Mealdb } from "./components/Mealdb";
import Github from "./components/Github";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="">

    <Router>
     
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/lat-and-lon" element={<GetState/>} />
        <Route path="/weather" element={<WeatherApi/>} />
        <Route path="/mealdb" element={<Mealdb/>} />
        <Route path="/github" element={<Github/>} />
        </Routes>
     </Router>
     </div>

  )


}

export default App;
