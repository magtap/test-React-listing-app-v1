import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID S7-rKcWh4cNNeIVhNRF3fT69A0fKg59wpFBAW991TxI'
    }
});

