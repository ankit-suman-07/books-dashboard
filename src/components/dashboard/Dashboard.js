import React, { useState, useEffect, useContext, useCallback } from 'react';
import "./Dashboard.css";

import axios from 'axios';
import SortIcon from "../../assets/sort.png";

import Search from "../search/Search";
import Table from '../table/Table';
import Pagination from "../pagination/Pagination";
import PerPage from '../pagination/PerPage';
import { BookContext } from '../../context/booksContext';

const Dashboard = () => {
    const { book, setBook, query, page, perPage } = useContext(BookContext);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [sort, setSort] = useState(true);



    const fetchBookData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&page=${page}&limit=${perPage}`);
            setBook(response.data.docs);
            console.log("Book Res: ", response.data.docs[0]);
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    }, [query, page, perPage, setBook]);

    useEffect(() => {
        fetchBookData();
    }, [fetchBookData]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const sortByColumn = (column) => {
        setSort(!sort);
        const sortedBooks = [...book].sort((a, b) => {
            let aValue = a[column] || "";
            let bValue = b[column] || "";

            // Check if values are numbers
            if (!isNaN(aValue) && !isNaN(bValue)) {
                aValue = Number(aValue);
                bValue = Number(bValue);
                return sort ? aValue - bValue : bValue - aValue;
            }

            // Convert values to strings for localeCompare
            aValue = String(aValue);
            bValue = String(bValue);
            return sort ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        });
        setBook(sortedBooks);
    };

    const sortSubjects = () => {
        setSort(!sort);
        const sortedBooks = [...book].map(bookItem => {
            const sortedSubjects = bookItem.subject ? [...bookItem.subject].sort((a, b) => {
                return sort ? a.localeCompare(b) : b.localeCompare(a);
            }) : [];
            return { ...bookItem, subject: sortedSubjects };
        }).sort((a, b) => {
            let aSubject = a.subject && a.subject[0] ? a.subject[0] : "";
            let bSubject = b.subject && b.subject[0] ? b.subject[0] : "";
            return sort ? aSubject.localeCompare(bSubject) : bSubject.localeCompare(aSubject);
        });
        setBook(sortedBooks);
    };

    return (
        <div className='dashboard' >


            <div className='table-row'>
                <div className='table-header'>
                    <span>Book Title</span>
                    <img src={SortIcon} alt='sort-icon' onClick={() => sortByColumn("title")} />
                </div>
                <div className='table-header'>
                    <span>Author Name</span>
                    <img src={SortIcon} alt='sort-icon' onClick={() => sortByColumn("author_name")} />
                </div>
                <div className='table-header'>
                    <span>Avg. Rating</span>
                    <img src={SortIcon} alt='sort-icon' onClick={() => sortByColumn("ratings_average")} />
                </div>
                <div className='table-header'>
                    <span>First Published In</span>
                    <img src={SortIcon} alt='sort-icon' onClick={() => sortByColumn("title")} />
                </div>
                <div className='table-header'>
                    <span>Subjects</span>
                    <img src={SortIcon} alt='sort-icon' onClick={sortSubjects} />
                </div>
                <div className='table-header'>
                    <span>Author's Birth Year</span>
                    <img src={SortIcon} alt='sort-icon' />
                </div>
                <div className='table-header'>
                    <span>Author's Top Work</span>
                    <img src={SortIcon} alt='sort-icon' />
                </div>
            </div>

            {book && book.map((item, idx) => {
                return <Table book={item} key={idx} id={idx} />
            })}


        </div>
    )
}

export default Dashboard;
