import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {UserAuth} from '../../context/AuthContext/AuthContext';
import {doc, getDoc} from 'firebase/firestore';
import {db, auth} from '../../firebase';
import './ProfilePage.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {Link} from 'react-router-dom';
import IconButton from "@mui/material/IconButton";



const ProfilePage = () => {
    const {user, logout} = UserAuth();
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);

    const getUserData = async (id) =>{
        const docRef = doc(db, "users", id);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
                setUserData(docSnap.data())
            } else { // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }
    }

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
        getUserData(auth.currentUser.uid)
    }, [])
    if (userData === null){
        return (
            <div>
                Loading...
            </div>
        )
    }
    return (
        <div className='account'>
            <div className='account__header'>
            <Link to='/swipe'>
                <IconButton>
                    <ArrowBackIosIcon fontSize="large"/>
                </IconButton>
            </Link>
            <h2>Account</h2>
            </div>
            <p>User Email: {
                user && user.email
            }</p>
            <p className='account__name'>{userData.name}</p>
            <img src={userData.photoUrl} alt="Current users image" className='account__photo'/>
            <button onClick={handleLogout} className='account__button'>Logout</button>
        </div>
    );
};

export default ProfilePage;
