import React from 'react';
import Connection from './Connection';
import Inscription from './Inscription';
import illustration from '../../Images/login.jpg';
import {Route, Switch} from 'react-router-dom';

function Log(props) {
    return (
        <div className="log">
            <img src={illustration} alt="illustration" className="illustration"/>
            <div className="type-log">
                <Switch>
                    <Route path="/log/inscription">
                        <Inscription/>
                    </Route>
                    <Route path="/log/connection">
                        <Connection/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Log;
