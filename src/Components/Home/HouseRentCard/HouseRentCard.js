import React from 'react';
import { Card } from 'react-bootstrap';
import banner from '../../../images/images/Rectangle 394.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faMapMarkerAlt, faToiletPaperSlash } from '@fortawesome/free-solid-svg-icons';

const HouseRentCard = (props) => {
    const { img } = props.houseData;
    console.log(img)
    return (
        <div className="col-md-4">
            <Card className="m-3">
                <Card.Img variant="top" src={banner} />
                <Card.Body>
                    <Card.Title className="text-left brand-text"><h4>Appoinment Hunt</h4></Card.Title>
                    <Card.Text className="text-left">
                        <p> <FontAwesomeIcon className="text-left mr-2" icon={faMapMarkerAlt} />
                       Nasirabad, Chittagong </p>
                        <div className="more-details d-flex justify-content-between">
                            <p> <FontAwesomeIcon className="text-left mr-2" icon={faBed} /> 3 Bedrooms </p>
                            <p> <FontAwesomeIcon className="text-left mr-2" icon={faToiletPaperSlash} /> 2 Birthrooms </p>
                       </div>
                       <div className="d-flex justify-content-between">
                           <h2 className="brand-text">$ 250 </h2>
                           <button className="btn brand-btn">View Details</button>
                       </div>
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default HouseRentCard;