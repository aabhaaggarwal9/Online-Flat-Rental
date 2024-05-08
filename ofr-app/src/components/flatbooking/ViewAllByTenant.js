import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import NavbarTenant from '../headerfooter/NavbarTenant';
import { viewAllByTenant } from '../../service/FlatBookingService';

function ViewAllByTenant() {
    const [flatBookings,setFlatBookings] = useState([]);

    const {id} = useParams();

    useEffect(()=>
    {
        viewAllByTenant(id).then(resp=>
        setFlatBookings(resp.data));
    },[id]);

    return(
      <div>
      <NavbarTenant/><br/><br/>
<div class="container">
<div class="mb-3 mt-3">
<h4>Flat Bookings</h4>
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
      <th>Cost</th>
      <th>Location</th>
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
        <td>{f.flat.cost}</td>
        <td>{f.flat.flatAddress.city}, {f.flat.flatAddress.state}</td>
        <td>{f.status}</td>
        <td><Link to={`/flatbooking/${f.bookingNo}`}><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
      </tr>)
}
  </tbody>
</table>
}
{
  flatBookings.length==0 &&
  <div class="card">
  <div class="card-body">
    Not Booked any flat
  </div>
</div>
}
</div>
</div>
     )
}

export default ViewAllByTenant;