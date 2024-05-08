import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import NavbarLandlord from '../headerfooter/NavbarLandlord';
import { viewAllApprovalLandlord } from '../../service/FlatBookingService';
import Footer from '../headerfooter/Footer';

function ApprovalFlatBookingLandlord() {
    const [flatBookings,setFlatBookings] = useState([]);

    const user=JSON.parse(localStorage.getItem("loginuser"));

    useEffect(()=>
    {
        viewAllApprovalLandlord().then(resp=>
        setFlatBookings(resp.data));
    },[]);

    return(
      <div>
            <NavbarLandlord/><br/><br/>
<div class="container">
<div class="mb-3 mt-3">
<h4>Pending Approvals</h4>
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
    flatBookings?.filter(f => f.flat.landlord.userId ===user.userId).map(f => <tr key={f.bookingNo}>
        <td>{f.bookingNo}</td>
        <td>{f.bookingFrom}</td>
        <td>{f.bookingTo}</td>
        <td>{f.members}</td>
        <td>{f.status}</td>
        <td><Link to={`/flatbooking/approval/landlord/${f.bookingNo}`}><button type="button" class="btn btn-outline-dark">Check Details</button></Link></td>
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
<br/><br/>
{
  <Footer/>
}
</div>
</div>
     )
}

export default ApprovalFlatBookingLandlord;