import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate=useNavigate()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Star DB</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/people/">People
                                    <span className="visually-hidden">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/planets/">Planets</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/starships/">Starships</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/secret">Secret</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/book_list">Store</NavLink>
                            </li>



                        </ul>
                        <div className="d-flex">
                            {/*<input className="form-control me-sm-2" type="search" placeholder="Search" />*/}
                            {/*    <button className="btn btn-secondary my-2 my-sm-0" type="submit" onClick={()=> {navigate("/login")}}>Search</button>*/}
                            <Link to="cart" className="btn btn-secondary my-2 my-sm-0">My cart</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

