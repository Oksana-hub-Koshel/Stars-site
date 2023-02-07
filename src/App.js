import './App.css';
import 'bootswatch/dist/slate/bootstrap.min.css';
import {Header} from "./components/header/header";
import {RandomPlanet} from "./components/random-planet/random-planet";
import Planets from "./components/planets/Planets";

import PlanetDetails from "./components/planet-details/planet-details";
import StarshipsList from "./components/starships/starships";
import {Routes, Route} from "react-router-dom";
import People from "./components/people/people";
import {PersonDetails} from "./components/person-details/person-details";
import {StarshipDetails} from "./components/starship_details/starship-details";




function App() {

    return (
   <>
       <Header />
    <div className="App">
        <RandomPlanet />
        <div style={{display:"flex", marginTop:50, gap:50}}>
        <Routes>
            <Route path="/" element={ <h1 style={{textAlign: "center"}}>Welcome to StarDB</h1>} exact />
            <Route path="/people" exact element={<People/>} />
            <Route path="/:id" element={<PersonDetails/>} />
            <Route path="/planets" exact element={<Planets/>} />
            <Route path="/planets/:id" element={<PlanetDetails/>} />
            <Route path="/starships" exact element={<StarshipsList/>} />
            <Route path="/starships/:id" element={<StarshipDetails/>} />
        </Routes>
        </div>

    </div>
   </>
  );
}

export default App;
