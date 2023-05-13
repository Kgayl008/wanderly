import './Photo.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import {Link} from 'react-router-dom';
import Logo from '../../assets/Logo/wanderly.png'

const Photo = () => {
    return(
        <div>
<div className='name'>
            <header>
                <img src={Logo}
                    alt='Wanderly logo'
                    className='name__logo'/>
            </header>
            <h1 className='name__question'>Add your first photo</h1>
            <input type="text" className='name__input' placeholder="Enter URL"></input>
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