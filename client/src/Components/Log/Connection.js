import React, { useState } from 'react';

function Connection() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form action="" className="form-connection">
            <h2>Lorem ipsum dolor sit amet</h2>
            <div className="myInput">
                <input required type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                <label className="placeholder">Username</label>
            </div>
            <div className="myInput">
                <input required type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <label className="placeholder">Password</label>
            </div>
        </form>
    )
}

export default Connection;
