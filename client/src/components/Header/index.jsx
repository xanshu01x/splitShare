import { useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest';
import './header.css';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const res = await apiRequest.post('/auth/logout');
        console.log(res);
        localStorage.removeItem('token');
        navigate('/login');
    };
    return (
        <div className='header-container'>
            <img className='header-logo' src='./logo.png' alt='logo' />
            <span className='header-text'>SplitShare</span>
            <div className='third'>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Header;
