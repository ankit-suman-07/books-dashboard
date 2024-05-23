// src/Table.js
import React, { useState, useEffect, useContext } from 'react';
import "./Table.css";
import axios from 'axios';
import { CSpinner } from '@coreui/react';
import { Loader } from 'rsuite';

import Subjects from '../subjects/Subjects';
import { BookContext } from '../../context/booksContext';
import PlaceholderLoading from 'react-placeholder-loading'

const Table = ({ book, id }) => {
    const { bookTempData, setBookTempData } = useContext(BookContext);

    const [author, setAuthor] = useState("");
    const [error, setError] = useState("");
    const [topWork, setTopWork] = useState("");
    const [birth, setBirth] = useState("");
    const [loading, setLoading] = useState(false);

    const [showSub, setShowSub] = useState(false);

    useEffect(() => {
        const fetchAuthorData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://openlibrary.org/search/authors.json?q=${book.author_name}`);
                console.log(id, " - author birth: ", response.data.docs[0].birth_date)
                console.log(id, " - author top: ", response.data.docs[1].top_work)
                setTopWork(response.data.docs[1].top_work);
                setBirth(response.data.docs[0].birth_date);
            } catch (error) {
                setError(error.message || "An error occurred");
            }
            setLoading(false);
        };

        if (book && book.author_name) {
            fetchAuthorData();
        }
    }, [book, book.author_name]); // Add 'book' as a dependency

    useEffect(() => {
        // Collect the book data and add to bookTempData
        const bookData = {
            title: book.title,
            author_name: book.author_name,
            ratings_average: Math.round(book.ratings_average * 10) / 10,
            first_publish_year: book.first_publish_year,
            subject: book.subject,
            birth: birth || "--",
            topWork: topWork || "--"
        };

        // Check if the bookData is already in bookTempData to avoid duplicates
        if (!bookTempData.some(b => b.title === bookData.title && b.author_name === bookData.author_name)) {
            setBookTempData(prevData => [...prevData, bookData]);
        }
    }, [birth, topWork]); // Run this effect when birth or topWork is updated

    if (loading) {
        return (
            <div className='row-loading' >

            </div>
        );
    }

    return (
        <div className='table-row' >
            <div className='title cell' >
                {book.title}
            </div>
            <div className='author cell' >
                {book.author_name}
            </div>
            <div className='ratings cell' >
                {Math.round(book.ratings_average * 10) / 10}
            </div>
            <div className='year cell' >
                {book.first_publish_year}
            </div>
            <div className='cell' >
                <div className='subject'  >
                    {book.subject && <Subjects items={book.subject} />}
                </div>
            </div>
            <div className='birth cell  mobile-hide' >
                {birth || "--"}
            </div>
            <div className='top cell  mobile-hide' >
                {topWork || "--"}
            </div>
        </div>
    );
};

export default Table;
