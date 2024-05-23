import React, { useState } from 'react';
import "./Authentication.css";

import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-up/SignUp";
import GoogleSignIn from './google-signin/GoogleSignIn';

import { signInWithEmailAndPassword } from 'firebase/auth';

const Authentication = () => {
    const [signIn, setSignIn] = useState(true);



    return (
        <div className='authentication' >
            <div className='auth-left' >
                <div className='auth-logo' >
                    Books.
                </div>
                <div className='auth-logo-quote' >
                    Read everything. All at once.
                </div>
            </div>
            <div className='auth-right' >
                <div className='auth-right-form' >



                    <div className='auth-form-box' >
                        {
                            signIn
                                ? <SignIn />
                                : <SignUp />
                        }
                    </div>
                    {
                        <GoogleSignIn />
                    }
                    {
                        signIn
                            ? <button onClick={() => setSignIn(!signIn)} className='sign-toggle' >Not an Existing User? Sign Up</button>
                            : <button onClick={() => setSignIn(!signIn)} className='sign-toggle' >Already a User? Sign In</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Authentication