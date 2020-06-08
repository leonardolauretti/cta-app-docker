import axios from 'axios';

export const authenticate = async (data) => {
    const params = new URLSearchParams();
    params.append('access_code', data.access_code);
    let response = await axios.post(`${process.env.API_URL}/authenticate`, params);
    return response.data;
}