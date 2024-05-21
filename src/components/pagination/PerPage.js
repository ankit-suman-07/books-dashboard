import React, { useContext } from 'react';
import { BookContext } from '../../context/booksContext';

const PerPage = () => {
    const { perPage, setPerPage } = useContext(BookContext);
    return (
        <div>
            Select results per page: {perPage}
            <button onClick={() => setPerPage(10)} >10</button>
            <button onClick={() => setPerPage(50)} >50</button>
            <button onClick={() => setPerPage(100)} >100</button>
        </div>
    )
}

export default PerPage