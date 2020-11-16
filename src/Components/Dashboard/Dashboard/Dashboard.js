import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import Booklist from '../Booklist/Booklist';

const Dashboard = () => {
    document.title = 'Appoinment Hunt | dashboard'
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);
    // useEffect(() => {
    //     fetch('https://young-shore-62919.herokuapp.com/checkAdmin', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setIsAdmin(data);
    //         })
    // }, []);
    return (
        <>
           {
               <Booklist></Booklist>
           }
        </>
    );
};

export default Dashboard;