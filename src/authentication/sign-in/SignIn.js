import React, { useState } from 'react';
import "./SignIn.css";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../firebase/auth';
import { useAuth } from '../../context/userContext';

import ShowIcon from "../../assets/show.png";

const SignIn = () => {
    const { currentUser, setCurrentUser, loading, handleSignOut } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [togglePassword, setTogglePassword] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                const result = await doSignInWithEmailAndPassword(email, password);
                console.log("Signed In : ", result.user.email);
                setCurrentUser(result.user);
                setIsSigningIn(false);
            } catch (error) {
                setErrorMessage(error.message);
                setIsSigningIn(false);
            }
        }
    }

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                const result = await doSignInWithGoogle();
                setCurrentUser(result.user);
                setIsSigningIn(false);
                console.log(result.user);
            } catch (error) {
                setErrorMessage(error.message);
                setIsSigningIn(false);
            }
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className='sign-in' >
            {/* {loading || isSigningIn ? (
                <p>Loading...</p>
            ) : currentUser ? (
                <div>
                    <p>Welcome, {currentUser.email}!</p>
                        <button onClick={handleSignOut}>Sign Out</button>
                </div>
            ) : ( */}
            <div className='form-heading' >
                Sign In
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
                    {isSigningIn ? 'Signing In...' : 'Sign In'}
                </button>
            </form>

        </div>
        /* )} */
    );
}

export default SignIn;
