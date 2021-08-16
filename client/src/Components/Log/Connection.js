import React, { useState } from 'react';
import Button from '../Buton/Button';

function Connection() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form action="" className="form-connection">
            <h2>Veuilez vous connecter</h2>
            <div className="myInput">
                <input required type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                <label className="placeholder">Username</label>
            </div>
            <div className="myInput">
                <input required type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <label className="placeholder">Password</label>
            </div>
            <div>
                <Button link="/home" btnStyle="btn-primary">Se connecter</Button>
                {/* eslint-disable-next-line */}
                <a href="#" className="password-forget">Mot de passe oublié ?</a>
            </div>
        </form>
    )
}

export default Connection;
