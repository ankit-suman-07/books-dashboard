import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/booksContext';

import DownIcon from "../../assets/down.png";

const PerPage = () => {
    const { perPage, setPerPage } = useContext(BookContext);
    const [visible, setVisible] = useState(false);

    const togglePerPage = (num) => {
        setVisible(!visible);
        setPerPage(num);
    }

    return (
        <div className='per-page-div' >
            <div className="toggle-div" >
                Rows: <button className='page-btn-toggle' onClick={() => setVisible(!visible)} >
                    {perPage}
                    <img src={DownIcon} alt="down-icon" />
                </button>
            </div>
            <div className={visible ? "page-btn" : "invisible"} >
                <button onClick={() => togglePerPage(10)} >10</button>
                <button onClick={() => togglePerPage(50)} >50</button>
                <button onClick={() => togglePerPage(100)} >100</button>
            </div>

        </div>
    )
}

export default PerPage