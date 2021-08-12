import React, {useState} from 'react';
import Button from '../Buton/Button';

function Inscription() {
    const [nom, setNom] = useState();
    const [mail, setMail] = useState();
    const [adresse, setAdresse] = useState();
    const [numéro, setNuméro] = useState();

    return(
        <div>
            <form action="" className="form-connection">
            <h2>Veuilez vous inscrire</h2>
            <div className="myInput">
                <input onChange={(e)=>{setNom(e.target.value)}} value={nom} required type="text" />
                <label className="placeholder">Nom</label>
            </div>
            <div className="myInput">
                <input onChange={(e)=>{setMail(e.target.value)}} value={mail} required type="text" />
                <label className="placeholder">Mail</label>
            </div>
            <div className="myInput">
                <input onChange={(e)=>{setAdresse(e.target.value)}} value={adresse} required type="text" />
                <label className="placeholder">Adresse</label>
            </div>
            <div className="myInput">
                <input onChange={(e)=>{setNuméro(e.target.value)}} value={numéro} required type="text" />
                <label className="placeholder">Numéro</label>
            </div>
            <div>
                <Button btnStyle="btn-primary">S'inscrire</Button>
                {/* eslint-disable-next-line */}
                <a href="#" className="password-forget">Mot de passe oublié ?</a>
            </div>
        </form>
        </div>
    )
}

export default Inscription
