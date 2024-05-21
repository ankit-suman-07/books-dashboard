// hooks/useFetchBooks.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchBooks = (query, page, perPage) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&page=${page}&limit=${perPage}`);
                setData(response.data.docs);
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
