import React from 'react';

function Pagination({ perPage, totalCourses, paginate, perPageChange }) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCourses / perPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul>
                {
                    pageNumbers.map( number => (
                        <li key={number}>
                            <button onClick={() => paginate(number)}>{number}</button>
                        </li>
                    ))
                }
            </ul>  
            <select onChange={perPageChange}>
                <option>3</option>
                <option>6</option>
                <option>9</option>
                <option>12</option>
            </select>
        </nav>
    )
}

export default Pagination
