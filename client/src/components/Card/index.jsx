import './card.css';
import PropTypes from 'prop-types';

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

Card.propTypes = {
    name: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string
};

export default Card;
