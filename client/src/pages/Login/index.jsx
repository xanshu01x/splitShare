import { useState } from 'react';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(username, password);
    };
    return (
        <div className='login-container'>
            <div className='login-items-container'>
                <h2 className='login-title'>Login</h2>
                <input
                    className='login-input'
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                ></input>
                <input
                    className='login-input'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button className='login-button' onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
