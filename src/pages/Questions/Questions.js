import './Questions.scss';
import 'firebase/firestore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import { Link } from 'react-router-dom';

const Questions = () => {
    return (
        <div className='profile'>
            <h4 className='profile__question'>What's your budget for travel?</h4>
            <div>
                <button>Budget (less than $1000)</button>
                <button>Mid-range ($1000-$5000)</button>
                <button>High-end ($5000-$10,000)</button>
                <button>Luxury (over $10,000)</button>
            </div>
            <h4 className='profile__question'>What's your availability for travel?</h4>
            <div>
                <button>Only weekends</button>
                <button>Flexible schedule</button>
                <button>Summer vacation only</button>
                <button>Winter vacation only</button>
                <button>Anytime, as long as I have notice.</button>
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
