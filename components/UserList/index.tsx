import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { User } from '@/types';
import { fetchUsers } from '@/pages/api';
import { Pagination } from '../Pagination';
import { UserModal } from '../UserModal';
import { useRouter } from 'next/router';
import TableHead from './TableHead';
import TableBody from './TableBody';

export const UserList = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const page = router.query.page || 1;
  const { data, isLoading, isError } = useQuery<User[]>({
    queryKey: ['users', router.query.page],
    queryFn: () => fetchUsers(Number(page)),
  });

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
            maxHeight: '96px',
            direction: 'rtl',
          }}
        >
          <table
            style={{
              direction: 'ltr',
            }}
          >
            <TableHead />
            <TableBody data={data} openModal={openModal} />
          </table>
        </div>
      )}
      <Pagination totalPages={totalPages} />
      {isModalOpen && selectedUser && (
        <UserModal user={selectedUser} onClose={closeModal} />
      )}
    </main>
  );
};
