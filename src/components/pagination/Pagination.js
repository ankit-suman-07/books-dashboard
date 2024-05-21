import React, { useContext } from 'react';
import "./Pagination.css";

import { BookContext } from '../../context/booksContext';

const Pagination = () => {
    const { page, setPage } = useContext(BookContext);

    const previous = () => {
        if (page > 1) {
            setPage(page - 1);
        } else {
            setPage(1);
        }
    }

    return (
        <div>
            <button onClick={previous} >Prev</button>
            {page}
            <button onClick={() => setPage(page + 1)} >Next</button>
        </div>
    )
}

export default Pagination