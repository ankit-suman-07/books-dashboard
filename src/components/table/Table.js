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
                // setAuthor(response.docs.name);
                setTopWork(response.data.docs[1].top_work);
                setBirth(response.data.docs[0].birth_date);
                // console.log("Top : ", response.data.docs[1].top_work);
                // console.log("Birth : ", response.data.docs[1].birth_date);
                // console.log("author: ", response)
            } catch (error) {
                setError(error.message || "An error occurred");
            }
            setLoading(false);
        };

        if (book && book.author_name) {
            fetchAuthorData();
        }
    }, [book.author_name]); // Add 'book' as a dependency

    if (loading) {
        return (
            <div className='row-loading' >

            </div>

        );
    } else {
        console.log(book.title, " - ", book.author_name, " - ", book.ratings_average, " - ", book.first_publish_year, " - ", book.subject, " - ", birth, " - ", topWork);
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
                {/* <button onClick={() => setShowSub(!showSub)} >
                    Show Subjects
                </button>
                <div className={showSub ? 'subject' : 'hide'}  >
                    {book.subject && <Subjects items={book.subject} />}
                </div> */}
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
