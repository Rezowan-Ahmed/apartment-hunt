import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import DashboardNav from '../DashboardNav/DashboardNav';
import SideMenu from '../SideMenu/SideMenu';

const Booklist = () => {
    const [loading, setLoading] = useState(false)

    return (
        <section>
            <DashboardNav></DashboardNav>
            <div className="row">
                <div className="col-md-2">
                    <SideMenu></SideMenu>
                </div>
                <div className="col-md-10 dashboard-container">
                    <h2 className="ml-4 pb-2 pt-4 font-weight-bold">Services List</h2>
                  
                            <div className="shadow-sm p-3 ml-4 mr-4 mb-5 bg-white rounded">
                                <Table responsive className="table-bordered table-hover">
                                    <thead class="thead-light">
                                        <tr>
                                            <th>Name</th>
                                            <th>Email ID</th>
                                            <th>Phone</th>
                                            <th>Message</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td>Email ID</td>
                                            <td>Service</td>
                                            <td>Project Details</td>
                                            <td>Status</td>
                                            <td>Action</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className="text-danger m-5 d-flex align-items-center font-weight-bold">
                                {/* <ReactBootstrap.Spinner animation="border" /> */}
                                <span className="ml-3"> Loading service list...........</span>
                            </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Booklist;