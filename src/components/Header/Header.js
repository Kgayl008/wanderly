import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import Logo from "../../assets/Logo/wanderly.png";
import IconButton from "@mui/material/IconButton";
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';
import "./Header.scss";

const Header = ({backButton}) => {
    return (
        <div className="header"> 
            <IconButton>
                <PersonIcon fontSize="large"/>
            </IconButton>
            <Link to='/'>
            <img src={Logo}
                alt="Wanderly Logo"
                className="header__logo"/>
            </Link>
            <Link to="/chat">
            <IconButton>
                <ForumIcon fontSize="large"/>
            </IconButton>
            </Link>
        </div>
    );
};

export default Header;
