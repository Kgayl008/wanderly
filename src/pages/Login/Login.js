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
        }
    };

    return (
        <div className='login'>
            <header className='login__header'>
                <img src={Logo}
                    alt="Wanderly Logo"
                    className="login__logo"/>
            </header>
            <div className='login__card-container'>
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
            </div>
            <div className='login__question'>
                Need an Acount?
                <NavLink to="/signup" className='login__login'>
                    Sign Up</NavLink>
            </div>
        </div>
    )
}

export default Login