import React, { createContext, useState } from 'react';
import useFetchAuthors from '../hooks/useFetchAuthor';


export const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [book, setBook] = useState(null);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [query, setQuery] = useState("all");

    const values = {
        book,
        setBook,
        page,
        setPage,
        perPage,
        setPerPage,
        query,
        setQuery
    }

    return (
        <BookContext.Provider value={values}>
            {children}
        </BookContext.Provider>
    );
};
