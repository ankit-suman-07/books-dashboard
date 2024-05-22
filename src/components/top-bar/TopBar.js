import React from 'react';
import "./TopBar.css";

import Search from '../search/Search';
import PerPage from '../pagination/PerPage';

const TopBar = () => {
    return (
        <div className='top-bar'>
            <Search />
            <PerPage />
        </div>
    )
}

export default TopBar