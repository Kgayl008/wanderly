import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "../../firebase";
import './Card.scss';

const Card = () => {
    //if you change the "people", remember to rerender the next option"/ spread operator
    //ALWAYS give KEYS in react, it allows react to efficiently re-render a LIST, makes is faster
    const [people, setPeople] = useState([
        // {
        //     name:'Kiyanna',
        //     url:'https://i0.wp.com/bistotheworld.com/wp-content/uploads/2019/10/Asmau-solo-travel-black-woman-6-min.jpg?w=1540&ssl=1'
        // },
        // {
        //     name:'Hughdahlia',
        //     url:'https://i0.wp.com/bistotheworld.com/wp-content/uploads/2019/10/Pelumi-Black-Kintsugi-solo-travel-black-woman-3-min.jpg?w=828&ssl=1'
        // },
        // {
        //     name:'Matthew',
        //     url:'https://i.pinimg.com/originals/be/7a/07/be7a07669bf9e17a82e54e30cb67ea79.jpg'
        // }
]);

useEffect(() => {
    database.collection("people").onSnapshot(snapshot => (
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
                    preventSwipe={['up','down']}
                    >
                    <div className="card" style={{backgroundImage: `url(${person.url})`}}>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default Card
