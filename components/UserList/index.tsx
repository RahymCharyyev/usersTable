import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { User } from '@/types';
import { fetchUsers } from '@/pages/api';
import { Pagination } from '../Pagination';
import { UserModal } from '../UserModal';
import { useRouter } from 'next/router';
import TableHead from './TableHead';
import TableBody from './TableBody';
import { LoadingComponent } from './Loading';
import { ErrorComponent } from './Error';

export const UserList = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const page = Number(router.query.page) || 1;

  const { data, isLoading, isError } = useQuery<User[]>({
    queryKey: ['users', page],
    queryFn: () => fetchUsers(page),
  });

  const openModal = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const totalPages = data ? Math.ceil(data.length / 3) : 0;

  return (
    <main className='py-6 px-6'>
      {isLoading ? (
        <LoadingComponent />
      ) : isError ? (
        <ErrorComponent />
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
