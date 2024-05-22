import React, { useState, useEffect, useContext } from 'react';
import "./Dashboard.css";

import axios from 'axios';

import Table from '../table/Table';
import Pagination from "../pagination/Pagination";
import PerPage from '../pagination/PerPage';
import { BookContext } from '../../context/booksContext';

const Dashboard = () => {
    const { book, setBook, query, page, perPage } = useContext(BookContext);

    // const [book, setBook] = useState(null);
    // const [page, setPage] = useState(11);
    // const [perPage, setPerPage] = useState(10);
    // const [query, setQuery] = useState("all");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchBookData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&page=${page}&limit=${perPage}`);
            // await setData(response.data.docs);
            setBook(response.data.docs)
            console.log("Book Res: ", response.data.docs[0])
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchBookData();
    }, [page, perPage]);

    if (loading) {
        return <div>Loading...</div>;
    }
    else {
        console.log("Book: ", book)
        //setUsername(details.results[0].name.first)
    }

    return (
        <div>
            <div className='table-row' >
                <div className='title cell' >
                    Book Title
                </div>
                <div className='author cell' >
                    Author Name
                </div>
                <div className='ratings cell' >
                    Avg. Rating
                </div>
                <div className='year cell' >
                    First Published In
                </div>
                <div className='cell' >
                    Subjects
                </div>
                <div className='birth cell' >
                    Author's Birth Year
                </div>
                <div className='top cell' >
                    Author's Top Work
                </div>

            </div>
            {
                book && book.map((item, idx) => {
                    return <Table book={item} key={idx} id={idx} />
                })
            }
            <PerPage />
            <Pagination />
        </div>
    )
}

export default Dashboard