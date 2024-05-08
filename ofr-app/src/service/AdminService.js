import axios from 'axios';
import {baseUrl} from '../appconstants/appconstants';

export function addAdmin(admin){
    return  axios.post(baseUrl+"/admin/add", admin);
} 

export function viewAdminById(adminId){
    return axios.get(baseUrl+"/admin/" + adminId);
}

export function updateAdmin(admin){
    return axios.put(baseUrl+"/admin/update", admin);
}