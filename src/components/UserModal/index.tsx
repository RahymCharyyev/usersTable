import React from 'react';
import { UserModalProps } from '@/types';

export const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
  return (
    <div className='modal fixed inset-0 flex items-center justify-center z-50'>
      <div className='modal-content bg-white w-96 p-6 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold mb-4'>Profile</h2>
        <img
          className='w-full h-auto rounded-md mb-4'
          src={user.avatar}
          alt={user.first_name}
        />
        <p className='text-sm mb-2'>
          <span className='font-semibold'>ID:</span> {user.id}
        </p>
        <p className='text-sm mb-2'>
          <span className='font-semibold'>First Name:</span> {user.first_name}
        </p>
        <p className='text-sm mb-2'>
          <span className='font-semibold'>Last Name:</span> {user.last_name}
        </p>
        <p className='text-sm mb-2'>
          <span className='font-semibold'>Email:</span> {user.email}
        </p>
        <button
          className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full'
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
