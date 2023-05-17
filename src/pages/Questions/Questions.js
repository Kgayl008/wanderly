import './Questions.scss';
import 'firebase/firestore';
import Logo from '../../assets/Logo/wanderly.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import { Link } from 'react-router-dom';

const Questions = () => {
    return (
        <div className='profile'>
            <header>
                <img src={Logo}
                    alt='Wanderly logo'
                    className='name__logo'/>
            </header>
            <h4 className='profile__question'>What's your budget for travel?</h4>
            <div>
                <button className='profile__button'>Budget (less than $1000)</button>
                <button className='profile__button'>Mid-range ($1000-$5000)</button>
                <button className='profile__button'>High-end ($5000-$10,000)</button>
                <button className='profile__button'>Luxury (over $10,000)</button>
            </div>
            <h4 className='profile__question'>What's your availability for travel?</h4>
            <div>
                <button className='profile__button'>Only weekends</button>
                <button className='profile__button'>Flexible schedule</button>
                <button className='profile__button'>Summer vacation only</button>
                <button className='profile__button'>Winter vacation only</button>
                <button className='profile__button'>Anytime, as long as I have notice.</button>
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
