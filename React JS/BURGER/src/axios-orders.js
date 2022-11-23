import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-734f7.firebaseio.com/'
});

export default instance;