import axios from 'axios';
import {baseUrl} from '../appconstants/appconstants';

export function addFlatBooking(flatBooking){
    return  axios.post(baseUrl+"/flatbooking/book", flatBooking);
} 

export function viewFlatBookingById(flatBookingId){
    return axios.get(baseUrl+"/flatbooking/"+flatBookingId)
}

export function updateFlatBooking(flatBooking){
    return axios.put(baseUrl+"/flatbooking/update", flatBooking);
}

export function viewAllFlatBookings(){
    return axios.get(baseUrl+"/flatbooking/all");
}

export function deleteFlatBooking(flatBookingId){
    return axios.delete(baseUrl+"/flatbooking/" + flatBookingId);
    }
export function viewAllByTenant(tenantId){
    return axios.get(baseUrl+"/flatbooking/tenant/"+tenantId);
}

export function viewAllApproval(){
    return axios.get(baseUrl+"/flatbooking/approval");
}

export function viewAllApprovalLandlord(){
    return axios.get(baseUrl+"/flatbooking/landlord/approval");
}

