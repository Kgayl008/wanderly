import React, {useState} from "react";
import './Name.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import {Link} from 'react-router-dom';
import Logo from '../../assets/Logo/wanderly.png';
import { collection, addDoc, doc, updateDoc } from '@firebase/firestore';
import { db, auth} from '../../firebase';

const Name = () => {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            const userId = auth.currentUser.uid;
            const userDoc = doc(db, "users", userId)
            await updateDoc(userDoc, {
                name
            });
            console.log("User data stored successfully");
            // Redirect or perform any necessary action
        } catch (e) {
            console.error('Error storing user data: ', e);
        }
    };
    return (
        <div className='name'>
            <header>
                <img src={Logo}
                    alt='Wanderly logo'
                    className='name__logo'/>
            </header>
            <h1 className='name__question'>What's your first name?</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' className='name__input'
                    value={name}
                    onChange={
                        (e) => setName(e.target.value)
                    }/>
                <button type='submit' className="name__button">Enter</button>
                <div className='next'>
                    <Link to='/photo'>
                        <IconButton>
                            <ArrowForwardIosIcon fontSize='large'/>
                        </IconButton>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Name;

