import './App.css';
import 'bootswatch/dist/slate/bootstrap.min.css';
import Planets from "./components/pages/planets/Planets";
import PlanetDetails from "./components/planet-details/planet-details";
import StarshipsList from "./components/pages/starships/starships";
import {Routes, Route} from "react-router-dom";
import People from "./components/pages/people/people";
import {PersonDetails} from "./components/person-details/person-details";
import {StarshipDetails} from "./components/starship_details/starship-details";
import LoginPage from "./components/pages/secret-page/login_page";
import Secret_page from "./components/pages/secret-page/secret_page";
import {useState} from "react";
import Layout from "./components/layout/layout";




function App() {
    const [isLogged, setIsLogged]=useState(false)

    const login=()=>{
        setIsLogged(true)
    }

    return (
   <>

       <Routes>
           <Route path="/" element={<Layout/>}>
            <Route index element={ <h1 style={{textAlign: "center"}}>Welcome to StarDB</h1>}  />
            <Route path="people" element={<People/>} />
            <Route path="login" element={<LoginPage isLogged={isLogged} logIn={login}/>} />
            <Route path="secret" element={<Secret_page isLogged={isLogged}/>} />
            <Route path="people/:id?" element={<PersonDetails/>} />
            <Route path="planets" exact element={<Planets/>} />
            <Route path="planets/:id" element={<PlanetDetails/>} />
            <Route path="starships" exact element={<StarshipsList/>} />
            <Route path="starships/:id" element={<StarshipDetails />}/>
           </Route>
        </Routes>

   </>
  );
}

export default App;
