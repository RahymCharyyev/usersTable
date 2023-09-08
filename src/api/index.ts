import axios from 'axios';

export const fetchUsers = async () => {
    const response = await axios.get('https://reqres.in/api/users');
    if (response.status !== 200) {
        throw new Error('Network response was not ok');
    }
    return response.data.data;
};