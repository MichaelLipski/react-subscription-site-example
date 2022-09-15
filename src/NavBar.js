import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

const NavBar = () => (
    <nav>
        <ul>
            <Link to='/'><img src={logo} alt='Logo' class='navlogo' /></Link>
            <li class='navlink'>
                <Link to='/'>Home</Link>
            </li>
            <li class='navlink'>
                <Link to='/subscriptions'>Subscriptions</Link>
            </li>
            <li class='navlink'>
                <Link to='/productlist'>Products</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;