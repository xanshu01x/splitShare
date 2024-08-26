import { useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import './header.css';

const Header = () => {
    const navigate = useNavigate();
    const { updateUser } = useContext(AuthContext);

    const handleLogout = async () => {
        await apiRequest.post('/auth/logout');
        updateUser(null);
        localStorage.removeItem('token');
        navigate('/login');
    };
    return (
        <div className='header-container'>
            <img className='header-logo' src='./logo.png' alt='logo' />
            <span className='header-text'>SplitShare</span>
            <div>
                <button className='third' onClick={handleLogout}>
                    Logout
                </button>
                <button className='third' onClick={() => navigate('/profile')}>
                    Profile
                </button>
            </div>
        </div>
    );
};

export default Header;
