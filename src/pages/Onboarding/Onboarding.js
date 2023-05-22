import './Onboarding.scss';
import React from 'react';
import Logo from '../../assets/Logo/wanderly.png';
import {Link} from "react-router-dom";
import Beach from '../../assets/Image/beach.jpg'

const Onboarding = () => {
    return (
        <div className='onborading'>
            <img src={Beach} alt='Sunset at the beach' className='onborading__image'/>
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
