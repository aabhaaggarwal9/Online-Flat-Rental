import axios from 'axios';
import {baseUrl} from '../appconstants/appconstants';

export function forgetPassword(password){
    return axios.post(baseUrl+"/forgetpassword", password);
}

export function loginUser(login){
    return axios.post(baseUrl+"/login", login);
}

export const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
 );

 export const validMobile = new RegExp(
    "[789][0-9]{9}"
 );

 export const validUsername = new RegExp(
    '[a-zA-Z][a-zA-Z0-9-_]{4,24}'
);

export const validName = new RegExp(
    "[a-zA-Z]+"
);

export const validPassword = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"
);


