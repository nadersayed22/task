import axios, { AxiosResponse } from 'axios';
import { history } from '../index';


axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

axios.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('jwt');
    if (token)
        config.headers.Authorization = `Bearer ${token}`;
    
    return config;
}, error => {
    //history.push('/login');
    return Promise.reject(error);
    })

axios.interceptors.response.use(undefined, error => {
    if (error.message === 'Network Error' && !error.response) {
    }
    const { status, data, config } = error.response;
    if (status === 401) {
        history.push('/login');
    }
    if (status === 404) {
        history.push('/notfound');
    }
    if (status === 400 && config.method === 'get' && data.errors.hasOwnProperty('id')) {
        history.push('/notfound');
    }
    if (status === 500) {
    }
    throw error.response;
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody)
};

export default {
    requests
}
