import React from 'react';
import { Card } from 'react-bootstrap';
import banner from '../../../images/images/Rectangle 394.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faMapMarkerAlt, faToiletPaperSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const HouseRentCard = ({ houseData }) => {
    return (
        <div className="col-md-4">
            <Card className="mt-3">
                <Card.Img variant="top" style={{minHeight: '220px'}} className="img-fluid" src={`data:image/png;base64,${houseData.houseImage.img}`} />
                <Card.Body>
                    <Card.Title className="text-left brand-text"><h4>{ houseData.serviceTitle }</h4></Card.Title>
                    <Card.Text className="text-left">
                        <p> <FontAwesomeIcon className="text-left mr-2" icon={faMapMarkerAlt} /> {houseData.location} </p>
                        <div className="more-details d-flex justify-content-between">
                            <p> <FontAwesomeIcon className="text-left mr-2" icon={faBed} /> Bedroom {houseData.bedroom} </p>
                            <p> <FontAwesomeIcon className="text-left mr-2" icon={faToiletPaperSlash} /> Birthroom {houseData.birthroom} </p>
                        </div>
                        <div className="row justify-content-between p-2">
                            <h2 className="brand-text"> $ {houseData.price} </h2>
                            <Link to={`/house/${houseData._id}`}><button className="btn brand-btn">View Details</button></Link>
                        </div>
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default HouseRentCard;