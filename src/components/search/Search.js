import React, { useState, useContext } from 'react';
import "./Search.css";

import { BookContext } from '../../context/booksContext';

const Search = () => {
    const { query, setQuery } = useContext(BookContext);

    const [searchQuery, setSearchQuery] = useState("");
    return (
        <div>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
            />
            <button onClick={() => setQuery(searchQuery)} >
                Search
            </button>
        </div>
    )
}

export default Search