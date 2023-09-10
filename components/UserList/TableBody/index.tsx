import { User } from '@/types';
import React from 'react';

interface TableBodyProps {
  data?: User[];
  openModal: (user: User) => void;
}

const TableBody = ({ data, openModal }: TableBodyProps) => {
  return (
    <tbody>
      {data?.map((user, index) => (
        <tr
          key={user.id}
          className={
            index % 2 === 0
              ? 'bg-white cursor-pointer text-xs text-text-color text-center whitespace-nowrap'
              : 'bg-row-bg cursor-pointer text-xs text-text-color text-center whitespace-nowrap'
          }
          onClick={() => openModal(user)}
        >
          <td
            className={
              index % 2 === 0
                ? 'bg-white sticky left-0 px-1 py-1 border border-gray-400'
                : 'bg-row-bg sticky left-0 px-1 py-1 border border-gray-400'
            }
          >
            {user.id}
          </td>
          <td className='px-1 py-1 border border-gray-400'>
            {user.first_name}
          </td>
          <td className='px-1 py-1 border border-gray-400'>{user.last_name}</td>
          <td className='px-1 py-1 border border-gray-400'>{user.email}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
