import React from 'react';
import {HeaderItem} from './NavBarItem';
// import Logo from '../../Images/logo.png';
import Button from '../Buton/Button';
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <header className="header" id="header">
            <h1 className="logo">Afrik'Rea.</h1>
            <ul className="header-menu">
               { 
                HeaderItem.map((item, index)=>{
                        return (
                            <li key={index} className="header-menu-item"> <Link className="header-menu-links" to="/home">{item.name} </Link> </li>
                        )
                    })
                }
                <li><Button btnStyle="btn-primary" type="inscription" link="/log/inscription">S'inscrire</Button></li>
                <li><Button btnStyle="btn-secondary" type="connection" link="/log/connection">Se connecter</Button></li>
            </ul>
        </header>
    )
}

export default NavBar;
