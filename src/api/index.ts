import { api } from './axios';

export const fetchUsers = async (page = 1) => {
    try {
        const response = await api.get(`/api/users?page=${page}`);
        if (response.status !== 200) throw new Error('Network response was not ok');
        return response.data.data;
    } catch (error) {
        if (error instanceof Error) throw new Error('Error fetching users: ' + error.message);
        else throw new Error('An unknown error occurred while fetching users.');
    }
};
