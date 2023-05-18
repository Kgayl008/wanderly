import './Photo.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import {Link} from 'react-router-dom';
import Logo from '../../assets/Logo/wanderly.png';
import {useState} from 'react';
import {updateDoc, doc} from 'firebase/firestore';
import {db, auth} from '../../firebase';


const Photo = () => {
    const [photoUrl, setPhotoUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userId = auth.currentUser.uid;
            const userDoc = doc(db, "users", userId)
            await updateDoc(userDoc, {photoUrl});
            console.log("Photo URL stored successfully");
            // Redirect or perform any necessary action
        } catch (e) {
            console.error('Error storing photo URL: ', e);
        }
    };
    return (
        <div>
            <div className='name'>
                <header>
                    <img src={Logo}
                        alt='Wanderly logo'
                        className='name__logo'/>
                </header>
                <h1 className='name__question'>Add your first photo</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" className='name__input' placeholder="Enter URL"
                        value={photoUrl}
                        onChange={
                            (e) => setPhotoUrl(e.target.value)
                    }></input>
                    <button type='submit' className="name__button">Enter</button>
                </form>
                <div className='next'>
                    <Link to='/profile'>
                        <IconButton>
                            <ArrowForwardIosIcon fontSize='large'/>
                        </IconButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Photo;
