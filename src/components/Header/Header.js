import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import Logo from "../../assets/Logo/wanderly.png";
import IconButton from "@mui/material/IconButton";
import {Link} from 'react-router-dom';
import "./Header.scss";

const Header = ({backButton}) => {
    return (
        <div className="header">
            <Link to='/account'>
                <IconButton>
                    <PersonIcon fontSize="large"/>
                </IconButton>
            </Link>
            <Link to='/'>
                <img src={Logo}
                    alt="Wanderly Logo"
                    className="header__logo"/>
            </Link>
            <Link>
                <IconButton>
                    <ForumIcon fontSize="large"/>
                </IconButton>
            </Link>
        </div>
    );
};

export default Header;
