import React, { FC } from 'react';

interface PaginationProps {
    currentPage: number;
    totalResults: number;
    onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalResults, onPageChange }) => {
    const totalPages = Math.ceil(totalResults / 8); // Assuming 8 items per page
    const pageNumbers: number[] = [];

    const renderPageNumbers = () => {
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pageNumbers.push(1, 2, 3, 4, -1, totalPages);
            } else if (currentPage > totalPages - 3) {
                pageNumbers.push(1, -1, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pageNumbers.push(1, -1, currentPage - 1, currentPage, currentPage + 1, -1, totalPages);
            }
        }
        return pageNumbers;
    };

    const handlePageChange = (page: number) => {
        if (page !== currentPage && page > 0 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="pagination">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                <img src="/images/left.svg" alt="prev"/>
            </button>
            {renderPageNumbers().map((page, index) =>
                page === -1 ? (
                        <button key={index} className="dots">
            ...
          </button>
                    ) : (
                        <button
                            key={index}
                            onClick={() => handlePageChange(page)}
                            className={currentPage === page ? 'active' : ''}
                        >
                            {page}
                        </button>
                    )
            )}
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                <img src="/images/right.svg" alt="next"/>
            </button>
        </div>
    );
};

export default Pagination;
