import React, { useContext, useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faHouseDamage, faLockOpen, faPlus, faShoppingCart, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'
// import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { userContext } from '../../../App';
import './SideMenu.css'
const SideMenu = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    return (
        <section className="bg-white" style={{ minHeight: '90vh' }}>
            <Navbar bg="white" expand="lg" className="">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mt-3 flex-column">
                        <NavLink className="text-decoration-none text-secondary font-weight-bold" to="/admin/booklist"><Nav.Link href="#booklist"><FontAwesomeIcon icon={faLockOpen} /> Book List</Nav.Link></NavLink>
                        <NavLink className="text-decoration-none text-secondary font-weight-bold" to="/admin/addhouse"><Nav.Link href="#addHouse"> <FontAwesomeIcon icon={faPlus} /> Add House</Nav.Link></NavLink>
                        <NavLink className="text-decoration-none text-secondary font-weight-bold" to="/admin/myRent"><Nav.Link href="#myRent"><FontAwesomeIcon icon={faHouseDamage} /> My Rent</Nav.Link></NavLink>
                        <Link className="text-decoration-none text-secondary font-weight-bold signout-btn" onClick={() => setLoggedInUser({})} ><Nav.Link href=""><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Nav.Link></Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </section>
    );
};

export default SideMenu;