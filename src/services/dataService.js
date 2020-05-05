import axios from 'axios';

const URL = `http://localhost:5000/api`;
const config = {
    headers: {
        'Content-type': 'application/json'
    },

}

export const getData = (resource, params = null) => {
    return axios.get(`${URL}/${resource}`, {
        headers: {
        'Content-type': 'application/json'
    },
    params: params
    })
}
