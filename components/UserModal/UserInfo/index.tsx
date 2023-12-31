import Image from 'next/image';
import React from 'react';

interface UserInfoProps {
  user: {
    id: number;
    avatar: string;
    first_name: string;
    last_name: string;
    email: string;
  };
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <div>
      <Image
        className='mx-auto mb-4'
        src={user.avatar}
        alt={user.first_name}
        width={120}
        height={120}
      />
      <p className='text-sm mb-2'>
        ID: <span className='text-text-color'>{user.id}</span>
      </p>
      <p className='text-sm mb-2'>
        First Name: <span className='text-text-color'>{user.first_name}</span>
      </p>
      <p className='text-sm mb-2'>
        Last Name: <span className='text-text-color'>{user.last_name}</span>
      </p>
      <p className='text-sm mb-2'>
        Email: <span className='text-text-color'>{user.email}</span>
      </p>
    </div>
  );
};
