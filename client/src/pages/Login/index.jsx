import { useState } from 'react';
import apiRequest from '../../lib/apiRequest';

import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validate = () => {
        if (email.length < 3) {
            setError('Email should be atleast 3 characters');
            return false;
        }
        if (password.length < 3) {
            setError('Password should be atleast 3 characters');
            return false;
        }
        return true;
    };
    const handleLogin = async () => {
        console.log(email, password);
        if (validate()) {
            try {
                const res = await apiRequest.post('/auth/login', {
                    email,
                    password
                });
                console.log(res);
                navigate('/');
            } catch (err) {
                setError(err.response.data.message);
                console.log(err.response.data.message);
            }
        }
    };
    return (
        <div className='login-container'>
            <div className='login-items-container'>
                <h2 className='login-title'>Login</h2>
                <input
                    className='login-input'
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                    className='login-input'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <span className='error-text'>{error}</span>
                <button className='login-button' onClick={handleLogin}>
                    Login
                </button>
                Or
                <button
                    className='login-button'
                    onClick={() => navigate('/signup')}
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Login;
