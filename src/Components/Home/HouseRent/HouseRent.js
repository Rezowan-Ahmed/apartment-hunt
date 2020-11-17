import React, { useEffect, useState } from 'react';
import FakeData from '../../../FakeData'
import HouseRentCard from '../HouseRentCard/HouseRentCard';
const HouseRent = () => {
    const [houseRent, setHouseRent] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch('http://localhost:5000/loadHouse')
            .then(res => res.json())
            .then(data => {
                setHouseRent(data)
                setLoading(true);
            })
    }, [])
    return (
        <React.Fragment>
            <div className="container text-center mt-5">
                <p className="text-secondary font-weight-bold">House Rent</p>
                <h2 className="brand-text">Discover the latest Rent <br />
                  available today</h2>

                <div className="row m-3 pt-5">
                    {
                        houseRent.map(data => <HouseRentCard key={data._id} houseData={data} ></HouseRentCard>)
                    }
                </div>
            </div>
        </React.Fragment>
    );
};

export default HouseRent;


