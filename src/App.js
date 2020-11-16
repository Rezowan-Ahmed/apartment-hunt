import { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Booklist from './Components/Dashboard/Booklist/Booklist';
import AddHouse from './Components/Dashboard/AddHouse/AddHouse';
import MyRent from './Components/MyRent/MyRent';


export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
            <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/admin/booklist">
            <Booklist />
          </Route>
          <Route path="/admin/addhouse">
            <AddHouse />
          </Route>
          <Route path="/admin/myRent">
            <MyRent />
          </Route>
          
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
