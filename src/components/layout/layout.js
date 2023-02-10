import React from 'react';
import {Header} from "../header/header";
import {Outlet} from "react-router-dom";
import Footer from "../footer/footer";
import {RandomPlanet} from "../random-planet/random-planet";

const Layout = () => {
    return (
        <div>
            <Header/>
            <div className="App">
                <RandomPlanet/>
                <div className="outlet">
                    <Outlet/>
                </div>

            </div>
            <Footer/>

        </div>
    );
};

export default Layout;