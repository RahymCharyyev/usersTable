import React from 'react';
import { UserModalProps } from '@/types';

export const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center'>
      <div className='bg-white w-72 rounded-lg border-2 border-gray-300  text-center'>
        <h2 className='text-center h-8 rounded-md bg-profile-bg font-semibold mb-4'>
          Profile
        </h2>
        <img
          className='w-24 h-24 mx-auto mb-4'
          src={user.avatar}
          alt={user.first_name}
        />
        <p className='text-sm mb-2'>
          ID:
          <span className='text-text-color'> {user.id}</span>
        </p>
        <p className='text-sm mb-2'>
          First Name:
          <span className='text-text-color'> {user.first_name}</span>
        </p>
        <p className='text-sm mb-2'>
          Last Name:
          <span className='text-text-color'> {user.last_name}</span>
        </p>
        <p className='text-sm mb-2'>
          Email:
          <span className='text-text-color'> {user.email}</span>
        </p>
        <button
          className='py-1 px-6 mb-2 rounded-sm border-2 border-gray-300'
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
