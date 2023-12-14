import axios from "axios";
import {apiAddress} from './apiAddress.json';

export const getFromApi = (endpoint) => {
    return axios.get(`${apiAddress}${endpoint}`)
}


export const avatarFromAuthor = (author,users) => {
    let avatar_url = './assets/user-star.png';
    if (users.length){
        avatar_url = users.find((user) => user.username === author).avatar_url;
    }
    return avatar_url
}

