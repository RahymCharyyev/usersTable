import React from 'react';
import { useRouter } from 'next/router';

interface PaginationProps {
  totalPages: number;
}
export const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const router = useRouter();
  const page = Number(router.query.page || 1);

  const prevPage = () => {
    if (page > 1) {
      router.push({
        pathname: '',
        query: { page: page - 1 },
      });
    }
  };

  const nextPage = () => {
    if (page < totalPages) {
      router.push({
        pathname: '',
        query: { page: page + 1 },
      });
    }
  };

  const handlePageChange = (newPage: number) => {
    router.push({
      query: { page: newPage },
    });
  };

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className='w-[250px]'>
      <div className='flex justify-center items-center text-xs'>
        <button
          className={`px-1 py-1 text-pagination-color hover:text-black`}
          onClick={() => handlePageChange(1)}
        >
          {'<<'}
        </button>
        <button
          className={`px-1 py-1 text-pagination-color hover:text-black`}
          onClick={prevPage}
        >
          {'<'}
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`px-1 py-1 ${
              pageNumber === page
                ? 'text-black'
                : 'text-pagination-color hover:text-black'
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className={`px-1 py-1  text-pagination-color hover:text-black`}
          onClick={nextPage}
        >
          {'>'}
        </button>
        <button
          className={`px-1 py-1  text-pagination-color hover:text-black`}
          onClick={() => handlePageChange(totalPages)}
        >
          {'>>'}
        </button>
      </div>
    </div>
  );
};
