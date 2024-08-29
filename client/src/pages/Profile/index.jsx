import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

import './profile.css';
import apiRequest from '../../lib/apiRequest';
const Profile = () => {
    const { currentUser, updateUser } = useContext(AuthContext);
    const [userDetails, setUserDetails] = useState(currentUser);

    // const validate = () => {
    //     if (email.length < 3) {
    //         setError('Email should be atleast 3 characters');
    //         return false;
    //     }
    //     if (password.length < 3) {
    //         setError('Password should be atleast 3 characters');
    //         return false;
    //     }
    //     return true;
    // };

    const handleNameChange = (e) => {
        console.log(e.target.value);
        setUserDetails({ ...userDetails, name: e.target.value });
    };
    const handleSubmit = async () => {
        try {
            updateUser({ ...userDetails });
            await apiRequest.put(`users/${currentUser.id}`, userDetails);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className='profile-container'>
            <div className='profile-items-container'>
                <h2 className='profile-title'>Profile</h2>
                <input
                    className='profile-input'
                    type='text'
                    placeholder='Name'
                    value={userDetails?.name}
                    onChange={handleNameChange}
                ></input>
                <input
                    className='profile-input'
                    type='text'
                    placeholder='Date Of Birth'
                ></input>
                <input
                    className='profile-input'
                    type='text'
                    placeholder='Email'
                    value={userDetails?.email}
                    disabled
                ></input>
                Change Password Coming Soon...
                <span className='error-text'>{}</span>
                <button className='profile-button' onClick={handleSubmit}>
                    Update
                </button>
            </div>
        </div>
    );
};

export default Profile;
