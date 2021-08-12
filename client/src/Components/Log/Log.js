import React from 'react';
import Connection from './Connection';
import Inscription from './Inscription';
import illustration from '../../Images/login1.png';

function Log(props) {
    let type;

    if(props.type==="inscription"){
        type = <Connection/>
    } else{
        type = <Inscription/>
    }

    return (
        <div className="log">
            <img src={illustration} alt="illustration" className="illustration"/>
            <div className="type-log">
                {type}
            </div>
        </div>
    )
}

export default Log;
