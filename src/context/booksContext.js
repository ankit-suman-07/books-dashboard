import React, { createContext, useState } from 'react';
import useFetchAuthors from '../hooks/useFetchAuthor';


export const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [book, setBook] = useState('light');
    // const { birthDate, topWork, error } = useFetchAuthors(author);

    const values = {
        book,
        setBook
    }

    return (
        <BookContext.Provider value={values}>
            {children}
        </BookContext.Provider>
    );
};
