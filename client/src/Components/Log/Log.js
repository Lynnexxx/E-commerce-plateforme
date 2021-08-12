import React from 'react';
import Connection from './Connection';
import Inscription from './Inscription';
import illustration from '../../Images/illustration.jpg';

function Log(props) {
    let type;

    if(props.type==="inscription"){
        type = <Inscription/>
    } else{
        type = <Connection/>
    }

    return (
        <div className="log">
            <div className="type-log">
                {type}
            </div>
            <img src={illustration} alt="illustration" className="illustration"/>
        </div>
    )
}

export default Log;
