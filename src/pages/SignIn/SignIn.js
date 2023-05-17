import React, {useState} from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import './SignIn.scss';
import Logo from '../../assets/Logo/wanderly.png';
// import {useAuth} from '../../context/AuthContext/AuthContext';
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext/AuthContext'

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { createUser } = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUser(email, password);
            navigate('/name')
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    };
    
    return (
        <div className='signup'>
            <header className='signup__header'>
                <img src={Logo}
                    alt="Wanderly Logo"
                    className="signup__logo"/>
            </header>
            <Card className='signup__card'>
                <Card.Body>
                    <h2 className='signup__title'>Sign Up</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label className='signup__subtitle'>Email</Form.Label>
                            <Form.Control type="email"
                                onChange={
                                    (e) => setEmail(e.target.value)
                                }
                                required
                                placeholder="Enter email"
                                className='signup__input'/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label className='signup__subtitle'>Password</Form.Label>
                            <Form.Control type="password"
                                onChange={
                                    (e) => setPassword(e.target.value)
                                }
                                required
                                placeholder="Password"
                                className='signup__input'/>
                        </Form.Group>
                        <Button className='signup__button' type='submit'>
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='signup__question'>
                Already have an Acount?
                <NavLink to="/login" className='signup__login'>
                    Log In</NavLink>
            </div>
        </div>
    )
}

export default Signup




// const emailRef = useRef()
    // const passwordRef = useRef()
    // const passwordConfirmRef = useRef()
    // // const {signup} = useAuth()
    // const [error, setError] = useState('')
    // const [loading, setLoading] = useState(false)

    // async function handleSubmit(e) {
    //     e.preventDefault();

    //     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //         return setError('Passwords do not match');
    //     }
    //     try {

    //         setError('')
    //         setLoading(true)
    //         await signup(emailRef.current.value, passwordRef.current.value);
    //     } catch {setError('Failedto create an account')}
    //     setLoading(false)}

// import React, {useState} from 'react';
// import {NavLink, useNavigate} from 'react-router-dom';
// import {createUserWithEmailAndPassword} from 'firebase/auth';
// import {auth, db} from '../../firebase';
// import "./SignIn.scss";
// import { collection, setDoc, doc } from '@firebase/firestore';

// const Signup = () => {
//     const navigate = useNavigate();

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('');

//     const userRef = collection(db, "users")

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password,);
//             const user = userCredential.user;
//             console.log(user);

//             navigate("/name");
//             // ...

//             await setDoc(doc(userRef, user.uid), {
//                 email: user.email,

//             })
//         } catch (error) {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode, errorMessage);
//             // ..
//         }
//     };
//     return (
//         <section>
//             <div className='signup'>
//                 <form>
//                     <div>
//                         <label htmlFor="email-address">
//                             Email address
//                         </label>
//                         <input type="email" label="Email address"
//                             value={email}
//                             onChange={
//                                 (e) => setEmail(e.target.value)
//                             }
//                             required
//                             placeholder="Email address"/>
//                     </div>
//                     <div>
//                         <label htmlFor="password">
//                             Password
//                         </label>
//                         <input type="password" label="Create password"
//                             value={password}
//                             onChange={
//                                 (e) => setPassword(e.target.value)
//                             }
//                             required
//                             placeholder="Password"/>
//                     </div>
//                     <button type="submit"
//                         onClick={onSubmit}>
//                         Sign up
//                     </button>
//                 </form>
//                 <p>
//                     Already have an account?{' '}
//                     <NavLink to="/login">
//                         Log in
//                     </NavLink>
//                 </p>
//             </div>
//         </section>
//     )
// }

// export default Signup
