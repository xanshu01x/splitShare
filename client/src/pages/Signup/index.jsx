import { useState } from 'react';
import apiRequest from '../../lib/apiRequest';

import './signup.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const validate = () => {
        if (name.length < 3) {
            setError('Name should be atleast 3 characters');
            return false;
        }
        if (email.length < 3) {
            setError('Email should be atleast 3 characters');
            return false;
        }
        if (password.length < 3) {
            setError('Password should be atleast 3 characters');
            return false;
        }
        if (rePassword.length < 3) {
            setError('Re-enter password should be atleast 3 characters');
            return false;
        }
        if (password !== rePassword) {
            setError('Password and Re-enter password should be same');
            return false;
        }
        return true;
    };

    const handleSignUp = async () => {
        if (validate()) {
            try {
                const res = await apiRequest.post('/auth/signup', {
                    name,
                    email,
                    password
                });
                console.log(res);
                navigate('/login');
            } catch (err) {
                setError(err.response.data.message);
                console.log(err.response.data.message);
            }

            console.log(name, email, password, rePassword);
            setError('');
        }
    };
    return (
        <div className='signup-container'>
            <div className='signup-items-container'>
                <h2 className='signup-title'>{`Let's Begin`}</h2>
                <input
                    className='signup-input'
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
                <input
                    className='signup-input'
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                    className='signup-input'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <input
                    className='signup-input'
                    type='password'
                    placeholder='Re-Enter Password'
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                ></input>
                <span className='error-text'>{error}</span>
                <button className='signup-button' onClick={handleSignUp}>
                    SignUp
                </button>
                Or
                <button
                    className='signup-button'
                    onClick={() => navigate('/login')}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default SignUp;
