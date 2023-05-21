import './Home.scss';
import Paris from '../../assets/Video/paris.mp4';
import Greece from '../../assets/Image/greece.webp';
import TimesSquare from '../../assets/Image/newyork.jpg';
import Lisbon from '../../assets/Image/lisbon.jpg';
import Peru from '../../assets/Image/peru.jpg';
import London from '../../assets/Video/london.mp4';
import Logo from '../../assets/Logo/wanderly.png';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__header'>
                <div className='home__title-section'>
                <h1 className='home__title'>Wanderly</h1>
                <img src={Logo} alt='Wanderly logo' className='home__logo'/>
                </div>
                <h2 className='home__text'><span>Swipe Right</span> on Your Next <span>Adventure</span> with Wanderly - The <span>Travel App</span> for <span>Solo Explorers</span></h2>
            </div>
            <h2 className='home__sub-title'>Find Your <br/>Next Adventure </h2>
            <div className='card__container'>
            <div className='card__mobile-container'>
                <div className='row__one'>
                    <div className='card__wrapper'>
                        <video src={Paris}
                            autoPlay
                            loop
                            muted
                            className='card__visuals'/>
                        <div className='card__text'>
                            <span className='card__place'>Eiffel Tower</span>
                            <span className='card__location'>Paris, France</span>
                        </div>
                    </div>
                    <div className='card__wrapper'>
                        <img src={TimesSquare}
                            alt='Times Square in New York City'
                            className='card__visuals'/>
                        <div className='card__text'>
                            <span className='card__place'>Times Square</span>
                            <span className='card__location'>Manhattan, New York</span>
                        </div>
                    </div>
                    <div className='card__wrapper'>
                        <img src={Lisbon}
                            alt='Lisbon'
                            className='card__visuals'/>
                        <div className='card__text'>
                            <span className='card__place'>Lisbon, Portugal</span>
                            </div>
                    </div>
                    <div className='card__wrapper'>
                        <img src={Peru}
                            alt='Machu Picchu, Peru'
                            className='card__visuals'/>
                        <div className='card__text'>
                            <span className='card__place'>Machu Picchu</span>
                            <span className='card__location'>Peru</span>
                        </div>
                    </div>
                    <div className='card__wrapper'>
                        <img src={Greece} alt='View of the city in Santorini, Greece' className='card__visuals'/>
                        <div className='card__text'>
                            <span className='card__place'>Santorini, Greece</span>
                            </div>
                    </div>
                    <div className='card__wrapper'>
                        <video src={London}
                            autoPlay
                            loop
                            muted
                            className='card__visuals'/>
                        <div className='card__text'>
                            <span className='card__place'>Big Ben</span>
                            <span className='card__location'>London, England</span>
                        </div>
                    </div>
                    <div className='card__wrapper'>
                        <img src={TimesSquare}
                            alt='Times Square in New York City'
                            className='card__visuals'/>
                        <div className='card__text'>
                            <span className='card__place'>Times Square</span>
                            <span className='card__location'>Manhattan, New York</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='button-section'>
            <Link to='/onboarding'>
                <button className='home__button'>START NOW</button>
            </Link>
            </div>
        </div>
    )
}

export default Home;
