import './Onborading.scss';
import React from 'react';
import Video from '../../assets/Video/video.mp4';
import Logo from '../../assets/Icons/wanderly.png';

const Onborading = () => {
    return (
        <div className='onborading'>
            <video src={Video}
                autoPlay
                loop
                muted/>
            <div className='content'>
                <img src={Logo}
                    alt='Wanderly logo'
                    className='onborading__logo'/>
            </div>
            <div className='onborading__buttons-section'>
                <button className='onborading__buttons'>CREATE ACCOUNT</button>
                <button className='onborading__buttons'>SIGN IN</button>
            </div>
        </div>
    )
}

export default Onborading;
