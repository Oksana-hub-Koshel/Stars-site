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
import RequireAuth from "./hoc/RequireAuth";
import {AuthProvider} from "./hoc/AuthProvider";
import Store from "./components/pages/store/store";

function App() {

    return (
        <AuthProvider>
       <Routes>
           <Route path="/" element={<Layout/>}>
            <Route index element={ <h1 style={{textAlign: "center"}}>Welcome to StarDB</h1>}  />
               <Route path="people/" element={<People/>} >
                   <Route path=":id" element={<PlanetDetails/>}/>
               </Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="secret" element={
                <RequireAuth>
                    <Secret_page />
                </RequireAuth>
               } />

               <Route path="planets" exact element={<Planets/>} />
            <Route path="planets/:id" element={<PlanetDetails/>} />
            <Route path="starships" exact element={<StarshipsList/>} />
            <Route path="starships/:id" element={<StarshipDetails />}/>
            <Route path="store" element={<Store />}/>
           </Route>
        </Routes>
</AuthProvider>


  );
}

export default App;
