import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import DashboardNav from '../DashboardNav/DashboardNav';
import SideMenu from '../SideMenu/SideMenu';

const MyRent = () => {
    const [loading, setLoading] = useState(false)

    return (
        <section>
            <DashboardNav></DashboardNav>
            <div className="row">
                <div className="col-md-2">
                    <SideMenu></SideMenu>
                </div>
                <div className="col-md-10 dashboard-container">
                    <h2 className="ml-4 pb-2 pt-4 font-weight-bold">My Rent</h2>
                    {
                        loading ?
                            <div className="shadow-sm p-3 ml-4 mr-4 mb-5 bg-white rounded">
                                <Table responsive className="table-bordered table-hover">
                                    <thead class="thead-light">
                                        <tr>
                                            <th>Name</th>
                                            <th>Email ID</th>
                                            <th>Service</th>
                                            <th>Project Details</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       
                                    </tbody>
                                </Table>
                            </div> :
                            <div className="text-danger m-5 d-flex align-items-center font-weight-bold">
                                {/* <ReactBootstrap.Spinner animation="border" /> */}
                                <span className="ml-3"> Loading service list...........</span>
                            </div>
                    }

                </div>
            </div>
        </section>
    );
};

export default MyRent;