import axios from 'axios';

const ApiCall = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
});

export { ApiCall };
