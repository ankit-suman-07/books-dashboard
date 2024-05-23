import React, { useContext } from 'react';
import "./TopBar.css";

import Search from '../search/Search';
import PerPage from '../pagination/PerPage';
import DownloadIcon from "../../assets/download.png";

import { useAuth } from '../../context/userContext';
import { BookContext } from '../../context/booksContext';
import downloadCSV from '../../utilis/downloadCSV';

const TopBar = () => {
    const { bookTempData } = useContext(BookContext);
    const { currentUser, setCurrentUser, loading, handleSignOut } = useAuth();

    const handleDownload = () => {
        console.log('Downloading CSV with data:', bookTempData);
        downloadCSV(bookTempData);
    };

    return (
        <>
            <div className='user-bar' >
                <button className='download-btn' onClick={handleDownload}  >
                    <img src={DownloadIcon} alt='download-icon' />
                    .csv
                </button>
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