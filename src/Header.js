import React from 'react';
import logo from './logo.png';
import './Header.css';
const Header = (props) => {
    return (<div className="Header">
        <img src={logo} alt="Agile Brazil 2018" className="Header-logo"/>
        <h1>Agenda 03/10</h1>
    </div>)
}

export default Header;