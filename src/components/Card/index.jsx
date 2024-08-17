import React from 'react';

import './card.css';

const Card = ({ name = '', amount = 0, currency = '₹' }) => {
    return (
        <div className='friends-box'>
            <h2>{name}</h2>
            <h2>
                {currency}
                {amount}
            </h2>
        </div>
    );
};

export default Card;
