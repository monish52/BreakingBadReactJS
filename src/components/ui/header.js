import React from 'react';
import { Link } from 'react-router-dom';
import bbicon from '../../img/bbicon.svg';
 

const Header = () => {
    return (
        <header className="center">
            <Link to={'/'}>
            <img src={bbicon} alt="Breaking bad icon" />
            </Link>
        </header>
    )
}

export default Header
