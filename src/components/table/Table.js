import React, { useState, useEffect } from 'react';
import "./Table.css";
import axios from 'axios';

const Table = ({ book, id }) => { // Destructure props correctly
    const [author, setAuthor] = useState("");
    const [error, setError] = useState("");
    const [topWork, setTopWork] = useState("");
    const [birth, setBirth] = useState("");
    const [loading, setLoading] = useState(false);

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

    if (loading || topWork === "") {
        return <div>Loading...</div>;
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
                {book.ratings_average}
            </div>
            <div className='year cell' >
                {book.first_publish_year}
            </div>
            <div className='subject cell' >
                {book.subject && book.subject.map((item, idx) => {
                    return (<span key={idx} >{item}-</span>)
                })}
            </div>
            <div className='birth cell' >
                {birth !== undefined ? birth : <span>NA</span>}
            </div>
            <div className='top cell' >
                {topWork}
            </div>

        </div>
    );
};

export default Table;
