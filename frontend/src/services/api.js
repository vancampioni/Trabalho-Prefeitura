import axios from 'axios';

const urlapi = axios.create({
    baseURL: 'http://localhost:3001',
})

export default urlapi;

