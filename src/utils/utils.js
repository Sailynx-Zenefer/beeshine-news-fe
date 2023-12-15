import axios from "axios";
import {apiAddress} from './apiAddress.json';
import userStar from "../assets/user-star.png";

export const reqFromApi = (req,endpoint,data) => {
    return axios({
        method: req,
        url: `${apiAddress}${endpoint}`,
        data: data
      });
}


export const avatarFromAuthor = (author,users) => {
    let avatar_url = userStar;
    if (users.length){
        avatar_url = users.find((user) => user.username === author).avatar_url;
    }
    return avatar_url
}

