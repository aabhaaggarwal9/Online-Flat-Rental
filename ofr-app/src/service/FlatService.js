import axios from 'axios';
import {baseUrl} from '../appconstants/appconstants';

export function addFlat(flat){
    return  axios.post(baseUrl+"/flat/save", flat);
} 

export function viewFlatById(flatId){
    return axios.get(baseUrl+"/flat/" + flatId);
}

export function updateFlat(flat){
    return axios.put(baseUrl+"/flat/update", flat);
}

export function viewAllFlats(){
    return axios.get(baseUrl+"/flat/all");
}

export function deleteFlat(flatId){
return axios.delete(baseUrl+"/flat/" + flatId);
}

export function viewAllApproval(){
return axios.get(baseUrl+"/flat/approval");
}

export function myProperties(landlordId){
    return axios.get(baseUrl+"/flat/landlord/"+landlordId);
}

export function flatSearch(){
    return axios.get(baseUrl+"/flat/search");
}

export const validPincode = new RegExp(
    '^[1-9][0-9]{5}$'
);