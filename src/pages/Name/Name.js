import './Name.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import {Link} from 'react-router-dom';
import Logo from '../../assets/Logo/wanderly.png';
import {useState} from 'react';
// import {db} from '../../firebase';
import firebase from '../../firebase';
// import { collection } from '@firebase/firestore'
// import '@firebase/firestore';

const Name = () => {
    const [name, setName] = useState('');


    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Assuming you have the authenticated user object with user ID
        const userId = firebase.auth().currentUser.uid;
        console.log(userId);
        
        const db = firebase.firestore();
        db.collection('users').doc(userId).set({name: name}).then(() => {
            console.log('User data stored successfully');
            // Redirect or perform any necessary action
        }).catch((error) => {
            console.error('Error storing user data: ', error);
        });
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
                    onChange={handleInputChange}/>
            <div className='next'>
                <Link to='/photo'>
                    <IconButton type='submit' >
                        <ArrowForwardIosIcon fontSize='large'/>
                    </IconButton>
                </Link>
            </div>
            </form>
        </div>
    )
}

export default Name;
