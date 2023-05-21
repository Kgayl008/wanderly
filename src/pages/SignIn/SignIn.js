import React, {useState} from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import './SignIn.scss';
import Logo from '../../assets/Logo/wanderly.png';
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
        }
    };
    
    return (
        <div className='signup'>
            <header className='signup__header'>
                <img src={Logo}
                    alt="Wanderly Logo"
                    className="signup__logo"/>
            </header>
            <div className='signup__card-container'>
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
            </div>
            <div className='signup__question'>
                Already have an Acount?
                <NavLink to="/login" className='signup__login'>
                    Log In</NavLink>
            </div>
        </div>
    )
}

export default Signup


