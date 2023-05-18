import './Questions.scss';
import 'firebase/firestore';
import Logo from '../../assets/Logo/wanderly.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import { Link } from 'react-router-dom';
import React, {useState} from 'react';

const Questions = () => {
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
            <h4 className='profile__question'>What's your budget for travel?</h4>
            <div>
                <button className={`profile__button ${selectedButtons.includes('Budget (less than $1000)') ? 'selected' : ''}`}onClick={() => handleButtonClick('Budget (less than $1000)')}>
                    Budget (less than $1000)
                </button>
                <button className={`profile__button ${selectedButtons.includes('Mid-range ($1000-$5000)') ? 'selected' : ''}`}onClick={() => handleButtonClick('Mid-range ($1000-$5000)')}>
                    Mid-range ($1000-$5000)
                </button>
                <button className={`profile__button ${selectedButtons.includes('High-end ($5000-$10,000)') ? 'selected' : ''}`}onClick={() => handleButtonClick('High-end ($5000-$10,000)')}>
                    High-end ($5000-$10,000)
                </button>
                <button className={`profile__button ${selectedButtons.includes('Luxury (over $10,000)') ? 'selected' : ''}`}onClick={() => handleButtonClick('Luxury (over $10,000)')}>
                    Luxury (over $10,000)
                </button>
            </div>
            <h4 className='profile__question'>What's your availability for travel?</h4>
            <div>
                <button className={`profile__button ${selectedButtons.includes('Only weekends') ? 'selected' : ''}`}onClick={() => handleButtonClick('Only weekends')}>
                    Only weekends
                </button>
                <button className={`profile__button ${selectedButtons.includes('Flexible schedule') ? 'selected' : ''}`}onClick={() => handleButtonClick('Flexible schedule')}>
                    Flexible schedule
                </button>
                <button className={`profile__button ${selectedButtons.includes('Summer vacation only') ? 'selected' : ''}`}onClick={() => handleButtonClick('Summer vacation only')}>
                    Summer vacation only
                </button>
                <button className={`profile__button ${selectedButtons.includes('Winter vacation only') ? 'selected' : ''}`}onClick={() => handleButtonClick('Winter vacation only')}>
                    Winter vacation only
                </button>
                <button className={`profile__button ${selectedButtons.includes('Anytime, as long as I have notice.') ? 'selected' : ''}`}onClick={() => handleButtonClick('Anytime, as long as I have notice.')}>
                    Anytime, as long as I have notice.
                </button>
            </div>
            <div className='next'>
                <Link to='/swipe'>
                <IconButton>
                <ArrowForwardIosIcon fontSize='large' />
                </IconButton>
                </Link>
            </div>
        </div>
    )
};

export default Questions;
