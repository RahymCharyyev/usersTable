import React from 'react';
const headers = ['ID', 'Given Name', 'Family Name', 'Email'];

const TableHead = () => {
  return (
    <thead className='sticky top-0 z-10'>
      {headers.map((header, index) => (
        <th
          key={`header-${index}`}
          className={`${
            index === 0
              ? 'sticky left-0 bg-header-bg text-center text-xs font-medium text-white uppercase whitespace-nowrap'
              : 'bg-header-bg text-center text-xs font-medium text-white uppercase whitespace-nowrap'
          } px-4 py-1 border border-gray-400`}
        >
          {header}
        </th>
      ))}
    </thead>
  );
};

export default TableHead;
