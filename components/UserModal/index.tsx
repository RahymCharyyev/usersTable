import React from 'react';
import { UserInfo } from './UserInfo';

interface UserModalProps {
  user: {
    id: number;
    avatar: string;
    first_name: string;
    last_name: string;
    email: string;
  };
  onClose: () => void;
}

export const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center'>
      <div className='bg-white w-72 rounded-lg border-2 border-gray-300  text-center'>
        <h2 className='text-center h-8 rounded-md bg-profile-bg font-semibold mb-4'>
          Profile
        </h2>
        <UserInfo user={user} />
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
