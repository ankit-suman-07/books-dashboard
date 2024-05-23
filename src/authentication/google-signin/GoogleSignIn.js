import React, { useState } from 'react';
import "./GoogleSignIn.css";
import { doSignInWithGoogle } from '../../firebase/auth';
import { useAuth } from '../../context/userContext';

import GoogleIcon from "../../assets/google.png";

const GoogleSignIn = () => {
    const { currentUser, setCurrentUser, loading, handleSignOut } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                const result = await doSignInWithGoogle();
                setCurrentUser(result.user);
                setIsSigningIn(false);
                console.log(result.user)
            } catch (error) {
                setErrorMessage(error.message);
                setIsSigningIn(false);
            }
        }
    }

    return (
        <div>
            {loading || isSigningIn ? (
                <p>Loading...</p>
            ) : currentUser ? (
                <div>
                    <p>Welcome, {currentUser.email}!</p>
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
            ) : (
                <div>

                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                    <button onClick={onGoogleSignIn} disabled={isSigningIn} className='google-sign-btn' >
                        <div className='google-icon' >
                            <img src={GoogleIcon} alt='google-icon' />
                        </div>
                        {isSigningIn ? 'Signing In...' : 'Sign In using Google'}
                    </button>
                </div>
            )}
        </div>
    )
}

export default GoogleSignIn