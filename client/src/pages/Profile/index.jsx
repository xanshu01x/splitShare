import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import './profile.css';
import { formatDate } from '../../utils';
const Profile = () => {
    const { currentUser } = useContext(AuthContext);

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
    return (
        <div className='profile-container'>
            <div className='profile-items-container'>
                <h2 className='profile-title'>Profile</h2>
                <input
                    className='profile-input'
                    type='text'
                    placeholder='Name'
                    value={currentUser.name}
                ></input>
                <input
                    className='profile-input'
                    type='text'
                    placeholder='Date Of Birth'
                    value={formatDate(currentUser.dob)}
                ></input>
                <input
                    className='profile-input'
                    type='text'
                    placeholder='Email'
                    value={currentUser.email}
                    disabled
                ></input>
                Change Password Coming Soon...
                <span className='error-text'>{}</span>
                <button className='profile-button' onClick={() => {}}>
                    Update
                </button>
            </div>
        </div>
    );
};

export default Profile;
