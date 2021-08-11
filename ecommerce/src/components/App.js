import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Dashboard from './Dashboard/Dashboard.js';
import Preferences from './Preferences/Preferences';
import Login from './Login/Login.js';
import '../App.css';
import useToken from './useToken';

function App() {
   
    const { token, setToken } = useToken();

    if(!token) 
    {
        return <Login setToken={setToken} />
      }
    return (

            <div className="wrapper">
                <h1>Application</h1>
                <BrowserRouter>
                    <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/preferences">
                        <Preferences />
                    </Route>
                    </Switch>
                </BrowserRouter>
            
                <Banner />
                <Cart/>
                <ShoppingList/>
            </div>);
}
 
export default App