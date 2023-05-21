import './Onboarding.scss';
import React from 'react';
import Video from '../../assets/Video/video.mp4';
import Logo from '../../assets/Logo/wanderly.png';
import {Link} from "react-router-dom";

const Onboarding = () => {
    return (
        <div className='onborading'>
            <video src={Video}
                autoPlay
                loop
                muted
                className='onborading__video'/>
            <div className='content'>
                <img src={Logo}
                    alt='Wanderly logo'
                    className='onborading__logo'/>
            </div>
            <div className='onborading__buttons-section'>
                <Link to="/signup">
                    <button className='onborading__buttons'>SIGN UP</button>
                </Link>
                <Link to="/login">
                    <button className='onborading__buttons'>LOG IN</button>
                </Link>
            </div>
        </div>
    )
}

export default Onboarding;
