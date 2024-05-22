import React from 'react';
import "./TopBar.css";

import Search from '../search/Search';

const TopBar = () => {
    return (
        <div className='top-bar'>
            <Search />
        </div>
    )
}

export default TopBar