import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logos/Logo.png'
import './Navigation.css'
const Navigation = () => {
    return (
        <>
            <Navbar bg="white" expand="lg">
                <Navbar.Brand className="ml-5"> <Link to="/home"><img src={logo} alt=""/></Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto navStyle">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-link" to="/service">Service</NavLink>
                        <NavLink className="nav-link" to="/concerns">Concerns</NavLink>
                        <NavLink className="nav-link" to="/event">Event</NavLink>
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        <NavLink to="/login"><button className="btn brand-btn mr-3">Login</button></NavLink>
                        <NavLink to="/dashboard"><button className="btn brand-btn mr-3">Dashboard</button></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Navigation;