import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import firestore from "../../firebase";
import './Card.scss';

const Card = () => {
    //if you change the "people", remember to rerender the next option"/ spread operator
    //ALWAYS give KEYS in react, it allows react to efficiently re-render a LIST, makes is faster
    const [people, setPeople] = useState([]);

useEffect(() => {
    firestore.collection("people").onSnapshot(snapshot => (
        setPeople(snapshot.docs.map(doc => doc.data()))
    ))
}, [])
    return (
        <div>
            <div className="card__container">
            {people.map(person => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    // onSwipe={(swipe) => {
                    //     console.log(swipe);
                    // }}
                    preventSwipe={['up','down']}
                    >
                    <div className="card" style={{backgroundImage: `url(${person.url})`}}>
                        <h3>{person.name}</h3>
                        <button>{person.traveler}</button>
                        <button>{person.activity}</button>
                        <button>{person.budget}</button>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default Card
