import axios from 'axios';

const instance = axios.create({baseURL: 'https://neko-cafe-back.herokuapp.com/'})

export const authAPI = {
    test(body: {success: boolean}) {
        return  instance.post('auth/test', body);
    }
}
