import React from 'react';
import "./TopBar.css";

import Search from '../search/Search';
import PerPage from '../pagination/PerPage';

import { useAuth } from '../../context/userContext';

const TopBar = () => {
    const { currentUser, setCurrentUser, loading, handleSignOut } = useAuth();
    return (
        <>
            <div className='user-bar' >
                Welcome,
                <span>
                    {
                        currentUser.email
                    }
                </span>
                <button onClick={handleSignOut} className='sign-out-btn' >
                    Sign Out
                </button>
            </div>
        <div className='top-bar'>
            <Search />
            <PerPage />
            </div>
        </>
    )
}

export default TopBar