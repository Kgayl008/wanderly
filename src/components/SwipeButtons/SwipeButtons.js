import './SwipeButtons.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from "@mui/material/IconButton";

const SwipeButtons = () => {
    return (
        <div className='swipeButtons'>
            <IconButton>
                <CloseIcon fontSize='large' className='swipeButtons__close'/>
            </IconButton>
            <IconButton>
                <AccountCircleIcon fontSize='large' className='swipeButtons__account'/>
            </IconButton>
            <IconButton>
                <FavoriteIcon fontSize='large' className='swipeButtons__favorite'/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons;
