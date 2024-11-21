import axios from 'axios';

export default axios.create({
    baseURL: 'https://your-backend-url.com', // Replace with your backend URL
    headers: { 'Content-Type': 'application/json' },
});
