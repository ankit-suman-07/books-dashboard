import React, { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    const [book, setBook] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [query, setQuery] = useState("all");
    const [bookTempData, setBookTempData] = useState([]);

    const values = {
        book,
        setBook,
        page,
        setPage,
        perPage,
        setPerPage,
        query,
        setQuery,
        bookTempData,
        setBookTempData
    };

    return (
        <BookContext.Provider value={values}>
            {children}
        </BookContext.Provider>
    );
};
