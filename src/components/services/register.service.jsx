import axios from 'axios';

export const Register = (data, callBack) => {
    return axios.post('https://fakestoreapi.com/users', data)
        .then((res) => {
            callBack(true, res.data);
        })
        .catch((error) => {
            callBack(false, error);
        });
}

