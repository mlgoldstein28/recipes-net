import React, { useState } from 'react';

const Pagination = ({meals, nPages, currentPage, setCurrentPage}) => {

        const pageNumbers = [...Array(nPages+1).keys()].slice(1);

        console.log(pageNumbers);

        const handleNext = () => {
            if (currentPage !== nPages)
           { setCurrentPage(currentPage + 1)}
        }

        const handlePrev = () => {
            if (currentPage !== 1) {
                setCurrentPage(currentPage - 1)
            }
        }

    return (
        <nav>
            <ul className="pagination justify-content-center m-3">
                <li className="page-item">
                    <button className="page-link"
                        onClick={handlePrev}
                        >
                            Previous
                    </button>
                </li>
                {pageNumbers.map((pageNumber) => (
                    <li key={pageNumber}
                        className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
                      <button onClick={() => setCurrentPage(pageNumber)}
                        className="page-link btn"
                        >
                            {pageNumber}
                      </button>
                    </li>
                    )
                )}
                <li className="page-item">
                    <button className="page-link"
                        onClick={handleNext}
                        >
                            Next
                        </button>
                </li>
            </ul>
        </nav>
    )
    }


export default Pagination;