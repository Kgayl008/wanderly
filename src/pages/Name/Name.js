import './Name.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo/wanderly.png'

const Name = () => {
    return(
        <div className='name'>
            <header>
                <img src={Logo} alt='Wanderly logo' className='name__logo'/>
            </header>
            <h1 className='name__question'>What's your first name?</h1>
            <input type="text" className='name__input'></input>
            <div className='next'>
                <Link to='/photo'>
                <IconButton>
                <ArrowForwardIosIcon fontSize='large' />
                </IconButton>
                </Link>
            </div>
        </div>
        
    )
}

export default Name;