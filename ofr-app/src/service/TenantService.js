import axios from 'axios';
import {baseUrl} from '../appconstants/appconstants';

export function addTenant(tenant){
    return  axios.post(baseUrl+"/tenant/save", tenant);
} 

export function viewTenantById(tenantId){
    return axios.get(baseUrl+"/tenant/" + tenantId);
}

export function updateTenant(tenant){
    return axios.put(baseUrl+"/tenant/update", tenant);
}

export function viewAllTenant(){
    return axios.get(baseUrl+"/tenant/all");
}

export function deleteTenant(tenantId){
return  axios.delete(baseUrl+"/tenant/" + tenantId);
}