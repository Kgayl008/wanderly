import './Home.scss';
import Paris from '../../assets/Video/paris.mp4';
import TimesSquare from '../../assets/Video/times-square.mp4';

const Home = () => {
    return (
        <div>
            <h1 className='home__title'>Wanderly</h1>
            <p>Swipe Right on Your Next Adventure with Wanderly - The Travel App for Solo Explorers</p>
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
                        <video src={TimesSquare}
                            autoPlay
                            loop
                            muted
                            className='card__visuals'/>
                            <div className='card__text'>
                                <span className='card__place'>Times Square</span>
                                <span className='card__location'>Manhattan, New York</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
