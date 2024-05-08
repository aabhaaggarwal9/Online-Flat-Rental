import axios from 'axios';
import {baseUrl} from '../appconstants/appconstants';

export function addLandlord(landlord){
    return  axios.post(baseUrl+"/landlord/save", landlord);
} 

export function viewLandlordById(landlordId){
    return axios.get(baseUrl+"/landlord/" + landlordId);
}

export function updateLandlord(landlord){
    return axios.put(baseUrl+"/landlord/update", landlord);
}

export function viewAllLandlord(){
    return axios.get(baseUrl+"/landlord/all");
}

export function deleteLandlord(landlordId){
return  axios.delete(baseUrl+"/landlord/" + landlordId);
}