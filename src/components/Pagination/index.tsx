import React from 'react';
import { PaginationProps } from '@/types';

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const prevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className='w-[250px]'>
      <div className='flex justify-center items-center text-xs'>
        <button
          className={`px-1 py-1 text-pagination-color hover:text-black ${
            currentPage === 1 ? 'cursor-not-allowed' : ''
          }`}
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        >
          {'<<'}
        </button>
        <button
          className={`px-1 py-1 text-pagination-color hover:text-black ${
            currentPage === 1 ? 'cursor-not-allowed' : ''
          }`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          {'<'}
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`px-1 py-1 ${
              pageNumber === currentPage
                ? 'text-black'
                : 'text-pagination-color hover:text-black'
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className={`px-1 py-1  text-pagination-color hover:text-black ${
            currentPage === totalPages || totalPages === 0
              ? 'cursor-not-allowed'
              : ''
          }`}
          onClick={nextPage}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          {'>'}
        </button>
        <button
          className={`px-1 py-1  text-pagination-color hover:text-black ${
            currentPage === totalPages || totalPages === 0
              ? 'cursor-not-allowed'
              : ''
          }`}
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          {'>>'}
        </button>
      </div>
    </div>
  );
};
