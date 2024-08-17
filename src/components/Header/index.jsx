import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <img className='header-logo' src='./logo.png' alt='logo' />
            <span className='header-text'>SplitShare</span>
            <div className='third'></div>
        </div>
    );
};

export default Header;
