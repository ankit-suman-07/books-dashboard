import React, { useState, useContext } from 'react';
import "./Search.css";

import SearchIcon from "../../assets/search.png";

import { BookContext } from '../../context/booksContext';

const Search = () => {
    const { query, setQuery } = useContext(BookContext);

    const [searchQuery, setSearchQuery] = useState("");
    return (
        <div className='search' >
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search a book"
            />
            <button onClick={() => setQuery(searchQuery)} >
                <img src={SearchIcon} alt='search-icon' />
            </button>
        </div>
    )
}

export default Search