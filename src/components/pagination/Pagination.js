import React, { useContext } from 'react';
import "./Pagination.css";

import { BookContext } from '../../context/booksContext';

import NextIcon from "../../assets/next.png";
import PrevIcon from "../../assets/prev.png";

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
        <div className='pagination' >
            <button onClick={previous} className='prev'>
                <img src={PrevIcon} alt='prev-icon' />
            </button>
            <div className='pagination-no' >{page}</div>
            <button onClick={() => setPage(page + 1)} className='next' >
                <img src={NextIcon} alt='next-icon' />
            </button>
        </div>
    )
}

export default Pagination