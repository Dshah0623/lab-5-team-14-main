import axios from 'axios';

const client = axios.create({
    baseURL: 'https://api.outsidein.dev/0ibWJ6AEwwAiYb81hyzdIjIpr6RlZ5DL',
});


const api = {
    async loadRestaurants() {
        const response = await client.get('/restaurants');
        return response.data;
    },
};

export default api;