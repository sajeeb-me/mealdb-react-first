import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar'>
            <div>
                <h1>Logo</h1>
            </div>
            <div>
                <a href="/home">Home</a>
                <a href="/menu">Menu</a>
                <a href="/about">About us</a>
                <a href="/order">Order now</a>
            </div>
        </nav>
    );
};

export default Header;