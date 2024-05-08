import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import NavbarAdmin from '../headerfooter/NavbarAdmin';
import { viewAllApproval } from '../../service/FlatBookingService';

function ApprovalFlatBooking() {
    const [flatBookings,setFlatBookings] = useState([]);

    useEffect(()=>
    {
        viewAllApproval().then(resp=>
        setFlatBookings(resp.data));
    },[]);

    return(
      <div class="row">
        <NavbarAdmin/>
        <div class="col-9">
<div class="container">
<div class="mb-3 mt-3">
<h4>Flatbooking Approvals</h4>
</div> 
 
{  
 flatBookings.length>0 &&       
<table class="table table-striped table-light shadow-lg">
  <thead class="thead-dark">
    <tr>
      <th>Booking No</th>
      <th>Booking From</th>
      <th>Booking To</th>
      <th>Members</th>
      <th>Status</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {
    flatBookings?.map(f => <tr key={f.bookingNo}>
        <td>{f.bookingNo}</td>
        <td>{f.bookingFrom}</td>
        <td>{f.bookingTo}</td>
        <td>{f.members}</td>
        <td>{f.status}</td>
        <td><Link to={`/flatbooking/approval/${f.bookingNo}`}><button type="button" class="btn btn-outline-dark">Check Details</button></Link></td>
      </tr>)
}
  </tbody>
</table>
}
{
  flatBookings.length==0 &&
  <div class="card">
  <div class="card-body">
    No pending approvals
  </div>
</div>
}
</div>
</div>
</div>
     )
}

export default ApprovalFlatBooking;