import './ProfileCreation.scss';
import 'firebase/firestore';

const ProfileCreation = () => {
    return (
        <div className='profile'>
            <h2 className='profile__title'>Discover Your Ideal Travel Style with Wanderly</h2>
            <p>Find Your Perfect Travel Match Based on Your Interests and Budget!</p>
            <h4 className='profile__question'>What's your first name?</h4>
            <input type="text"></input>
            <h4 className='profile__question'>What type of traveler are you?</h4>
            <div>
                <button>Backpacker</button>
                <button>Luxury traveler</button>
                <button>Budget traveler</button>
                <button>Digital nomad</button>
                <button>Foodie traveler</button>
                <button>Cultural traveler</button>
            </div>
            <h4 className='profile__question'>What activities do you enjoy when you travel?</h4>
            <div>
                <button>Hiking</button>
                <button>Sightseeing</button>
                <button>Relaxing on the beach</button>
                <button>Trying local cuisine</button>
                <button>Water sports</button>
                <button>Volunteering</button>
            </div>
            <h4 className='profile__question'>What's your budget for travel?</h4>
            <div>
                <button>Budget (less than $1000)</button>
                <button>Mid-range ($1000-$5000)</button>
                <button>High-end ($5000-$10,000)</button>
                <button>Luxury (over $10,000)</button>
            </div>
        </div>
    )
};

export default ProfileCreation;
