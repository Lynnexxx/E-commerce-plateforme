import React from 'react'

function Button(props) {
    return (
        <button className={`btn ${props.btnStyle}`}>
            {props.children}
        </button>
    )
}

export default Button
