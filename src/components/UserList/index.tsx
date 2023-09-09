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

  const totalPages = data ? Math.floor(data.length / 3) : 0;

  const openModal = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  return (
    <main className='max-w-[120px] h-[250px] py-6 px-6'>
      {isLoading ? (
        <div className='text-center text-gray-600'>Loading...</div>
      ) : isError ? (
        <div className='text-center text-red-600'>Error loading users</div>
      ) : (
        <table className='min-w-full divide-y divide-black'>
          <thead>
            <tr>
              <th className='bg-header-bg px-8 py-2 text-center  border-2 font-medium text-white uppercase tracking-wider'>
                ID
              </th>
              <th className='bg-header-bg px-8 py-2 text-center border-2 text-xs font-medium text-white uppercase'>
                Given Name
              </th>
              <th className='bg-header-bg px-8 py-2 text-center border-2 text-xs font-medium text-white uppercase tracking-wider'>
                Family Name
              </th>
              <th className='bg-header-bg px-8 py-2 text-center border-2 text-xs font-medium text-white uppercase tracking-wider'>
                Email
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-black'>
            {data.map((user) => (
              <tr
                key={user.id}
                className='bg-white cursor-pointer'
                onClick={() => openModal(user)}
              >
                <td className='text-text-color px-1 py-2 text-center whitespace-nowrap'>
                  {user.id}
                </td>
                <td className='text-text-color px-1 py-2 text-center whitespace-nowrap'>
                  {user.first_name}
                </td>
                <td className='text-text-color px-1 py-2 text-center whitespace-nowrap'>
                  {user.last_name}
                </td>
                <td className='text-text-color px-1 py-2 text-center whitespace-nowrap'>
                  {user.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
