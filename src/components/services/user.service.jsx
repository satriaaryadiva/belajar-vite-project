import axios from "axios";

export const getProfile = (id, callBack) => {
    return axios.get(`https://fakestoreapi.com/users/${id}`)
        .then((res) => {
            callBack(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
};
