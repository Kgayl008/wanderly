import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import Logo from "../../assets/Icons/wanderly.png";
import IconButton from "@mui/material/IconButton";
import "./Header.scss";

const Header = () => {
    return (
        <div className="header"> 
            <IconButton>
                <PersonIcon fontSize="large"/>
            </IconButton>
            <img src={Logo}
                alt="Wanderly Logo"
                className="header__logo"/>
            <IconButton>
                <ForumIcon fontSize="large"/>
            </IconButton>
        </div>
    );
};

export default Header;
