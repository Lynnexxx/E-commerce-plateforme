import React from 'react';
import Button from '../Buton/Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane, faPhone, faLocationArrow} from '@fortawesome/free-solid-svg-icons';
import {Social} from './FooterSocialItem';
import Logo from '../../Images/logo.png';

function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="footer-contact">
                <div className="footer-contact-phone" ><FontAwesomeIcon icon={faPhone}/> Phone : <span>+88019339702520</span> </div>
                <div className="footer-contact-location"><FontAwesomeIcon icon={faLocationArrow}/> Adresse : <span>30 North West New</span>  </div>
            </div>
            <div className="newsletter">
                <form action="" className="newletter-form">
                    <input placeholder="Entrer votre email" type="text"  className="newsletter-input"/>
                    <Button btnStyle="btn-secondary">
                        Submit
                        <FontAwesomeIcon icon={faPaperPlane}/>
                    </Button>
                </form>
            </div>
            <div className="footer-description">
                <img src={Logo} className="logo-footer" alt="logo"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat rerum quasi reiciendis temporibus iste deserunt?</p>
            </div>
            <div className="footer-social">
                <ul>
                    {
                        Social.map((item, index)=>{
                            return (
                                <li key={index}>
                                    <a href={item.url}>
                                        <FontAwesomeIcon icon={item.icon}/>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </footer>
    )
}

export default Footer
