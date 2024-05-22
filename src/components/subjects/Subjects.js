import React from 'react';
import "./Subjects.css";

const Subjects = ({ items }) => {
    return (
        <div className='sub-outer' >

            {
                items && items.map((sub) => {
                    return (
                        <span className='sub-span' > {sub}</span>
                    );
                })
            }
        </div>
    )
}

export default Subjects