import React from 'react';
import {HeaderItem} from './HeaderItem';
import Logo from '../../Images/logo.png';
import Button from '../Buton/Button';

function Header() {
    return (
        <header className="header" id="header">
            <img className="logo" src={Logo} alt="logo"/>
            <ul className="header-menu">
               { 
                HeaderItem.map((item, index)=>{
                        return (
                            <li className="header-menu-item"> <a className="header-menu-links" href={item.url}>{item.name} </a> </li>
                        )
                    })
                }
                <li><Button btnStyle="btn-primary">S'inscrire</Button></li>
                <li><Button btnStyle="btn-secondary">Se connecter</Button></li>
            </ul>
        </header>
    )
}

export default Header;
