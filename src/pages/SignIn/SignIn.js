import React, {useRef} from 'react';
import { Form, Button, Card} from 'react-bootstrap';
import './SignIn.scss';
import Logo from '../../assets/Logo/wanderly.png';
import { useAuth } from '../../context/AuthContext/AuthContext'

const Signup = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()

    function handleSubmit(e) {
        e.preventDefault()

        signup(emailRef.current.value, passwordRef.current.value,)
    }
    return(
        <div className='signup'>
            <header className='signup__header'>
            <img src={Logo}
                alt="Wanderly Logo"
                className="signup__logo"/>
            </header>
            <Card className='signup__card'>
                <Card.Body>
                    <h2 className='signup__title'>Sign Up</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label className='signup__subtitle'>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required className='signup__input'/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label className='signup__subtitle'>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required className='signup__input'/>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label className='signup__subtitle'>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required className='signup__input'/>
                        </Form.Group>
                        <Button className='signup__button'>
                        Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='signup__question'>
                Already have an Acount? Log In
            </div>
        </div>
    )
}

export default Signup


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
