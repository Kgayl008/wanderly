import './ProfileCreation.scss';
import 'firebase/firestore';
import Logo from '../../assets/Logo/wanderly.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import { Link } from 'react-router-dom';

const ProfileCreation = () => {
    return (
        <div className='profile'>
            <header>
                <img src={Logo}
                    alt='Wanderly logo'
                    className='name__logo'/>
            </header>
            <h2 className='profile__title'>Discover Your Ideal Travel Style with Wanderly</h2>
            <p>Find Your Perfect Travel Match Based on Your Interests and Budget!</p>
            <h4 className='profile__question'>What type of traveler are you?</h4>
            <div>
                <button>Backpacker</button>
                <button>Luxury traveler</button>
                <button>Budget traveler</button>
                <button>Digital nomad</button>
                <button>Foodie traveler</button>
                <button>Cultural traveler</button>
            </div>
            <h4 className='profile__question'>What activities do you enjoy when you travel?</h4>
            <div>
                <button>Hiking</button>
                <button>Sightseeing</button>
                <button>Relaxing on the beach</button>
                <button>Trying local cuisine</button>
                <button>Water sports</button>
                <button>Volunteering</button>
            </div>
            <div className='next'>
                <Link to='/questions'>
                <IconButton>
                <ArrowForwardIosIcon fontSize='large' />
                </IconButton>
                </Link>
            </div>
        </div>
    )
};

export default ProfileCreation;
