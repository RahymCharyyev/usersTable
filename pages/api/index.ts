import { api } from './axios';

export const fetchUsers = async (page = 1) => {
    const response = await api.get(`/api/users?page=${page}`);
    if (response.status !== 200) throw new Error('Network response was not ok');
    return response.data.data;

};