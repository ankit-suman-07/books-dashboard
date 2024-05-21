// hooks/useFetchBooks.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchBooks = (author) => {
    const [birthDate, setBirthDate] = useState("");
    const [topWork, setTopWork] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://openlibrary.org/search/authors.json?q=${author}`);
                setBirthDate(response.data.birth_data);
                setTopWork(response.data.top_work);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };

        fetchData();
    }, [author]);

    return { birthDate, topWork, error };
};

export default useFetchBooks;
