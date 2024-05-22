import React, { useState, useEffect, useContext } from 'react';
import "./Dashboard.css";

import axios from 'axios';
import SortIcon from "../../assets/sort.png";

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
                <div className='table-header' >
                    <span>Book Title</span>
                    <img src={SortIcon} alt='sort-icon' />
                </div>
                <div className='table-header' >
                    <span>Author Name</span>
                    <img src={SortIcon} alt='sort-icon' />
                </div>
                <div className='table-header' >
                    <span>Avg. Rating</span>
                    <img src={SortIcon} alt='sort-icon' />
                </div>
                <div className='table-header' >
                    <span>First Published In</span>
                    <img src={SortIcon} alt='sort-icon' />
                </div>
                <div className='table-header' >
                    <span>Subjects</span>
                    <img src={SortIcon} alt='sort-icon' />
                </div>
                <div className='table-header' >
                    <span>Author's Birth Year</span>
                    <img src={SortIcon} alt='sort-icon' />
                </div>
                <div className='table-header' >
                    <span>Author's Top Work</span>
                    <img src={SortIcon} alt='sort-icon' />
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