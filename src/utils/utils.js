import axios from "axios";
import {apiAddress} from './apiAddress.json';

export const getFromApi = (endpoint) => {
    return axios.get(`${apiAddress}${endpoint}`)
}

