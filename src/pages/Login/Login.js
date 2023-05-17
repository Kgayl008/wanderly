import React, {useState} from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import './Login.scss';
import Logo from '../../assets/Logo/wanderly.png';
import {NavLink} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {UserAuth} from '../../context/AuthContext/AuthContext'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {signIn} = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await signIn(email, password)
            navigate('/swipe')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    };

    return (
        <div className='login'>
            <header className='login__header'>
                <img src={Logo}
                    alt="Wanderly Logo"
                    className="login__logo"/>
            </header>
            <Card className='login__card'>
                <Card.Body>
                    <h2 className='login__title'>Log In</h2>
                    {/* {error && <Alert variant="danger">{error}</Alert>} */}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label className='login__subtitle'>Email</Form.Label>
                            <Form.Control type="email"
                                onChange={
                                    (e) => setEmail(e.target.value)
                                }
                                required
                                placeholder="Enter email"
                                className='login__input'/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label className='login__subtitle'>Password</Form.Label>
                            <Form.Control type="password"
                                onChange={
                                    (e) => setPassword(e.target.value)
                                }
                                required
                                placeholder="Password"
                                className='login__input'/>
                        </Form.Group>
                        <Button className='login__button' type='submit'>
                            Log In
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='login__question'>
                Need an Acount?
                <NavLink to="/signup" className='login__login'>
                    Sign Up</NavLink>
            </div>
        </div>
    )
}

export default Login
// import React, {useState} from 'react';
// import {signInWithEmailAndPassword} from 'firebase/auth';
// import { auth } from '../../firebase';
// import {NavLink, useNavigate} from 'react-router-dom';
// import './Login.scss';

// const Login = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const onLogin = (e) => {
//         e.preventDefault();
//         signInWithEmailAndPassword(auth, email, password).then((userCredential) => { // Signed in
//             const user = userCredential.user;
//             navigate("/swipe")
//             console.log(user);
//         }).catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode, errorMessage)
//         });

//     }
//     return (
//         <>
//             <main>
//                 <section>
//                     <div className='login'>
//                         <form>
//                             <div>
//                                 <label htmlFor="email-address">
//                                     Email address
//                                 </label>
//                                 <input id="email-address" name="email" type="email" required placeholder="Email address"
//                                     onChange={
//                                         (e) => setEmail(e.target.value)
//                                     }/>
//                             </div>
//                             <div>
//                                 <label htmlFor="password">
//                                     Password
//                                 </label>
//                                 <input id="password" name="password" type="password" required placeholder="Password"
//                                     onChange={
//                                         (e) => setPassword(e.target.value)
//                                     }/>
//                             </div>

//                             <div>
//                                 <button onClick={onLogin}>
//                                     Login
//                                 </button>
//                             </div>
//                         </form>

//                         <p className="text-sm text-white text-center">
//                             No account yet? {' '}
//                             <NavLink to="/signup">
//                                 Sign up
//                             </NavLink>
//                         </p>

//                     </div>
//                 </section>
//             </main>
//         </>
//     )
// }

// export default Login;
