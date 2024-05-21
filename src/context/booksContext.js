import React, { createContext, useState } from 'react';


export const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [book, setBook] = useState('light');


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
