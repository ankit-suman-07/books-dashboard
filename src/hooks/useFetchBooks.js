// hooks/useFetchBooks.js
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { BookContext } from '../context/booksContext';

const useFetchBooks = (query, page, perPage) => {
    const { book, setBook } = useContext(BookContext);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&page=${page}&limit=${perPage}`);
                setData(response.data.docs);
                setBook(response.data.docs)
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };

        fetchData();
    }, [query, page, perPage]);



    return { data, loading, error };
};

export default useFetchBooks;
