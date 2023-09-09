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
            maxWidth: '350px',
            maxHeight: '220px',
            direction: 'rtl',
          }}
        >
          <table
            style={{
              direction: 'ltr',
            }}
            className='divide-y divide-black'
          >
            <thead className='sticky top-0 z-10'>
              <tr>
                <th className='sticky left-0 bg-header-bg px-8 py-2 text-center border border-gray-400 text-xs font-medium text-white uppercase whitespace-nowrap'>
                  ID
                </th>
                <th className='bg-header-bg px-8 py-2 text-center border border-gray-400 text-xs font-medium text-white uppercase whitespace-nowrap'>
                  Given Name
                </th>
                <th className='bg-header-bg px-8 py-2 text-center border border-gray-400 text-xs font-medium text-white uppercase whitespace-nowrap'>
                  Family Name
                </th>
                <th className='bg-header-bg px-8 py-2 text-center border border-gray-400 text-xs font-medium text-white uppercase whitespace-nowrap'>
                  Email
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-black'>
              {data.map((user, index) => (
                <tr
                  key={user.id}
                  className={
                    index % 2 === 0
                      ? 'bg-white cursor-pointer'
                      : 'bg-row-bg cursor-pointer'
                  }
                  onClick={() => openModal(user)}
                >
                  <td
                    className={
                      index % 2 === 0
                        ? 'bg-white cursor-pointer sticky left-0 text-text-color px-1 py-2 text-center border border-gray-400 whitespace-nowrap'
                        : 'bg-row-bg cursor-pointer sticky left-0 text-text-color px-1 py-2 text-center border border-gray-400 whitespace-nowrap'
                    }
                  >
                    {user.id}
                  </td>
                  <td className='text-text-color px-1 py-2 text-center border border-gray-400 whitespace-nowrap'>
                    {user.first_name}
                  </td>
                  <td className='text-text-color px-1 py-2 text-center border border-gray-400 whitespace-nowrap'>
                    {user.last_name}
                  </td>
                  <td className='text-text-color px-1 py-2 text-center border border-gray-400 whitespace-nowrap'>
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
