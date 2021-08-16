import React from 'react';
import {Link} from 'react-router-dom';

function Button(props) {
    return (
        <button className={`btn ${props.btnStyle}`}>
            <Link to={props.link}>{props.children}</Link>
        </button>
    )
}

export default Button
