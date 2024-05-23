import React, { useState } from 'react';
import "./SignUp.css";
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from '../../firebase/auth';
import { useAuth } from '../../context/userContext';

import ShowIcon from "../../assets/show.png";

const SignUp = () => {
    const { currentUser, loading } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [togglePassword, setTogglePassword] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            setErrorMessage('');
            try {
                await doCreateUserWithEmailAndPassword(email, password);
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setIsSigningIn(false);
            }
        }
    };

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            setErrorMessage('');
            try {
                await doSignInWithGoogle();
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setIsSigningIn(false);
            }
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className='sign-up' >

            <div className='form-heading' >
                Sign Up
            </div>
            <form onSubmit={onSubmit} className='form' >
                <div className='form-email' >
                    <label className='form-label' >Email:</label>
                    <input
                        type='email'
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter Email ID"
                        required
                        className='form-input-text'
                    />
                </div>
                <div className='form-password' >
                    <label className='form-label' >Password:</label>
                    <div className='form-password-toggle' >
                        <input
                            type={togglePassword ? "text" : "password"}
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder='Enter Password'
                            required
                            className='form-input-text'
                        />
                        <button className='password-toggle' onClick={() => setTogglePassword(!togglePassword)} >
                            <img src={ShowIcon} alt='show-icon' />
                        </button>
                    </div>
                </div>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <button type="submit" disabled={isSigningIn} className='form-sign-btn' >
                    {isSigningIn ? 'Signing Up...' : 'Sign Up'}
                </button>
            </form>

        </div>

    );
};

export default SignUp;
