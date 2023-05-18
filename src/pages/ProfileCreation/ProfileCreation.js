import './ProfileCreation.scss';
import 'firebase/firestore';
import Logo from '../../assets/Logo/wanderly.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import {Link} from 'react-router-dom';
import React, {useState} from 'react';

const ProfileCreation = () => {
    const [selectedButtons, setSelectedButtons] = useState([]);

    const handleButtonClick = (buttonName) => {
        setSelectedButtons((prevSelectedButtons) => {
            if (prevSelectedButtons.includes(buttonName)) { // Button is already selected, remove it from the selectedButtons state
                return prevSelectedButtons.filter((name) => name !== buttonName);
            } else { // Button is not selected, add it to the selectedButtons state
                return [
                    ...prevSelectedButtons,
                    buttonName
                ];
            }
        });
    };
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
                <button className={`profile__button ${selectedButtons.includes('Backpacker') ? 'selected' : ''}`}onClick={() => handleButtonClick('Backpacker')}>
                    Backpacker
                </button>
                <button className={`profile__button ${selectedButtons.includes('Luxury traveler') ? 'selected' : ''}`}onClick={() => handleButtonClick('Luxury traveler')}>
                    Luxury traveler
                </button>
                <button className={`profile__button ${selectedButtons.includes('Budget traveler') ? 'selected' : ''}`}onClick={() => handleButtonClick('Budget traveler')}>
                    Budget traveler
                </button>
                <button className={`profile__button ${selectedButtons.includes('Digital nomad') ? 'selected' : ''}`}onClick={() => handleButtonClick('Digital nomad')}>
                    Digital nomad
                </button>
                <button className={`profile__button ${selectedButtons.includes('Foodie traveler') ? 'selected' : ''}`}onClick={() => handleButtonClick('Foodie traveler')}>
                    Foodie traveler
                </button>
                <button className={`profile__button ${selectedButtons.includes('Cultural traveler') ? 'selected' : ''}`}onClick={() => handleButtonClick('Cultural traveler')}>
                    Cultural traveler
                </button>
                </div>
            <h4 className='profile__question'>What activities do you enjoy when you travel?</h4>
            <div>
                <button className={`profile__button ${selectedButtons.includes('Hiking') ? 'selected' : ''}`}onClick={() => handleButtonClick('Hiking')}>
                    Hiking
                </button>
                <button className={`profile__button ${selectedButtons.includes('Sightseeing') ? 'selected' : ''}`}onClick={() => handleButtonClick('Sightseeing')}>
                    Sightseeing
                </button>
                <button className={`profile__button ${selectedButtons.includes('Relaxing on the beach') ? 'selected' : ''}`}onClick={() => handleButtonClick('Relaxing on the beach')}>
                    Relaxing on the beach
                </button>
                <button className={`profile__button ${selectedButtons.includes('Trying local cuisine') ? 'selected' : ''}`}onClick={() => handleButtonClick('Trying local cuisine')}>
                    Trying local cuisine
                </button>
                <button className={`profile__button ${selectedButtons.includes('Water sports') ? 'selected' : ''}`}onClick={() => handleButtonClick('Water sports')}>
                    Water sports
                </button>
                <button className={`profile__button ${selectedButtons.includes('Volunteering') ? 'selected' : ''}`}onClick={() => handleButtonClick('Volunteering')}>
                    Volunteering
                </button>
            </div>
            <div className='next'>
                <Link to='/questions'>
                    <IconButton>
                        <ArrowForwardIosIcon fontSize='large'/>
                    </IconButton>
                </Link>
            </div>
        </div>
    )
};

export default ProfileCreation;
