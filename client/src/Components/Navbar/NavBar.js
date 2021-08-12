import React from 'react';
import {HeaderItem} from './NavBarItem';
// import Logo from '../../Images/logo.png';
// import Button from '../Buton/Button';

function NavBar() {
    return (
        <header className="header" id="header">
            <h1 className="logo">Afrik'Rea.</h1>
            <ul className="header-menu">
               { 
                HeaderItem.map((item, index)=>{
                        return (
                            <li className="header-menu-item"> <a className="header-menu-links" href={item.url}>{item.name} </a> </li>
                        )
                    })
                }
                {/* <li><Button btnStyle="btn-primary">S'inscrire</Button></li>
                <li><Button btnStyle="btn-secondary">Se connecter</Button></li> */}
            </ul>
        </header>
    )
}

export default NavBar;
