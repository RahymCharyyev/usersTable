'use client';
import React, { useState } from 'react';
import { fetchUsers } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { User } from '@/types';
import { Pagination } from '../Pagination';
import { UserModal } from '../UserModal';

export const UserList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading, isError } = useQuery<User[]>({
    queryKey: ['users', currentPage],
    queryFn: () => fetchUsers(currentPage),
  });

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const openModal = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const totalPages = data ? Math.floor(data.length / 3) : 0;

  return (
    <main className='py-6 px-6'>
      {isLoading ? (
        <div className='text-center text-gray-600'>Loading...</div>
      ) : isError ? (
        <div className='text-center text-red-600'>Error loading users</div>
      ) : (
        <div
          style={{
            overflowX: 'scroll',
            overflowY: 'scroll',
            maxWidth: '250px',
            maxHeight: '120px',
            direction: 'rtl',
          }}
        >
          <table
            style={{
              direction: 'ltr',
            }}
          >
            <thead className='sticky top-0 z-10'>
              <tr className='bg-header-bg text-center text-xs font-medium text-white uppercase whitespace-nowrap'>
                <th className='sticky left-0 bg-header-bg px-4 py-1 border border-gray-400'>
                  ID
                </th>
                <th className=' px-4 py-1 border border-gray-400'>
                  Given Name
                </th>
                <th className=' px-4 py-1 border border-gray-400'>
                  Family Name
                </th>
                <th className=' px-4 py-1 border border-gray-400'>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
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
                  <td className='px-1 py-1 border border-gray-400'>
                    {user.last_name}
                  </td>
                  <td className='px-1 py-1 border border-gray-400'>
                    {user.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {isModalOpen && selectedUser && (
        <UserModal user={selectedUser} onClose={closeModal} />
      )}
    </main>
  );
};
