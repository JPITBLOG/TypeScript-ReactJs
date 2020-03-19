import axios from 'axios';

export const baseUrl = `http://localhost:8001/student`;

const baseServices = axios.create({
    baseURL: baseUrl
});

export default baseServices;