import './SwipeButtons.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReplayIcon from '@mui/icons-material/Replay';
import IconButton from "@mui/material/IconButton";

const SwipeButtons = () => {
    return (
        <div className='swipeButtons'>
            <IconButton>
                <ReplayIcon fontSize='large'className='swipeButtons__replay'/>
            </IconButton>
            <IconButton>
                <CloseIcon fontSize='large' className='swipeButtons__close'/>
            </IconButton>
            <IconButton>
                <StarIcon fontSize='large' className='swipeButtons__star'/>
            </IconButton>
            <IconButton>
                <FavoriteIcon fontSize='large' className='swipeButtons__favorite'/>
            </IconButton>
            <IconButton>
                <AccountCircleIcon fontSize='large' className='swipeButtons__account'/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons;
