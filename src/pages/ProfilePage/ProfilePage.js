import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {UserAuth} from '../../context/AuthContext/AuthContext';
import { doc, getDoc} from 'firebase/firestore';
import {db, auth} from '../../firebase';
import './ProfilePage.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {Link} from 'react-router-dom';
import IconButton from "@mui/material/IconButton";

const ProfilePage = () => {
    const {user, logout} = UserAuth();
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
            console.log('You are logged out');
        } catch (e) {
            console.log(e.message);
        }
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = auth.currentUser.uid;
                const userRef = doc(db, 'users', userId);
                const userDoc = await getDoc(userRef);
                if (userDoc.exists()) {
                    setUserData(userDoc.data());
                } else {
                    console.log('User data not found');
                }
            } catch (e) {
                console.error('Error fetching user data: ', e);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className='account'>
            <Link to='/swipe'>
                <IconButton>
                    <ArrowBackIosIcon fontSize="large"/>
                </IconButton>
            </Link>
            <h2>Account</h2>
            <p>User Email: {
                user && user.email
            }</p>
            {
            user && (
                <>
                <p> Hello, {user.name}</p>
                    {/* <p>Name:</p> {
                        user.name
                    }</p>
                    <p>Photo URL: 
                        <img src={user.photoUrl} atl="Users image"/>  
                    </p> */}
                </>
            )
        }
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default ProfilePage;

// import React from 'react';
// import {useNavigate} from 'react-router-dom';
// import {UserAuth} from '../../context/AuthContext/AuthContext';
// import './ProfilePage.scss';

// const ProfilePage = () => {
//     const {user, logout} = UserAuth();
//     const navigate = useNavigate();

//     const handleLogout = async () => {
//         try {
//             await logout();
//             navigate('/');
//             console.log('You are logged out')
//         } catch (e) {
//             console.log(e.message);
//         }
//     };

//     return (
//         <div className='account'>
//             <h2>Account</h2>
//             <p>User Email: {
//                 user && user.email
//             }</p>
//             <button onClick={handleLogout}>
//                 Logout
//             </button>
//         </div>
//     );
// };

// export default ProfilePage;
