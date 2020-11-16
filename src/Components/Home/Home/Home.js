import React from 'react';
import './Home.css'
import Navigation from '../../Shareable/Navigation/Navigation';
import HouseRent from '../HouseRent/HouseRent';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';
import Footer from '../../Shareable/Footer/Footer';
const Home = () => {
    return (
        <React.Fragment>
            <Navigation> </Navigation>
            <TopBanner></TopBanner>
            <HouseRent></HouseRent>
            <Services></Services>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default Home;