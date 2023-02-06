import './App.css';
import 'bootswatch/dist/slate/bootstrap.min.css';
import {Header} from "./components/header/header";
import {RandomPlanet} from "./components/random-planet/random-planet";
import Planets from "./components/planets/Planets";

import PlanetDetails from "./components/planet-details/planet-details";
import StarshipsList from "./components/starships/starships";
import {Routes, Route} from "react-router-dom";
import People from "./components/people/people";




function App() {

    return (
   <>
       <Header />
    <div className="App">
        <RandomPlanet />
        <div style={{display:"flex", marginTop:50, gap:50}}>
        <Routes>
            <Route path="/planets" element={<Planets/>} />
            <Route path="/starships" element={<StarshipsList/>} />
            <Route path="/" element={<People/>} />
            {/*<PlanetDetails />*/}
        </Routes>
        </div>

    </div>
   </>
  );
}

export default App;
