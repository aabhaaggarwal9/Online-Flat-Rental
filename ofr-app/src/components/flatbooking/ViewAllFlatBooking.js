import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavbarAdmin from '../headerfooter/NavbarAdmin';
import { viewAllFlatBookings } from '../../service/FlatBookingService';

function ViewAllFlatBooking() {
    const [flatBookings,setFlatBookings] =useState([]);

    useEffect(()=>
    {
        viewAllFlatBookings().then(resp=>setFlatBookings(resp.data));
    },[]);

    return(
      <div class="row">
      <NavbarAdmin/>
      <div class="col-9">
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
              <th>Status</th>
              <th>FlatId</th>
              <th>TenantId</th>
              {/* <th></th> */}
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
            flatBookings.map(f => <tr key={f.bookingNo}>
             <td>{f.bookingNo}</td>
                <td> {f.bookingFrom}</td>
                 <td> {f.bookingTo}</td>
                 <td> {f.members}</td>
                <td>{f.status}</td>
                <td>{f.flat.flatId}</td>
                <td>{f.tenant.userId}</td>
                {/* <td><Link to={`/flatbooking/${f.bookingNo}`}><i class="fa fa-eye" aria-hidden="true"></i></Link></td> */}
                <td><Link to={`/flatbooking/update/${f.bookingNo}`}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link></td>
                <td><Link to={`/flatbooking/delete/${f.bookingNo}`}><i class="fa fa-trash" aria-hidden="true"></i></Link></td>
              </tr>)
}
          </tbody>
        </table>
}
{
  flatBookings.length==0 &&
  <div class="card">
  <div class="card-body">
    No flats booked 
  </div>
</div>
}
      </div>
      </div>
      </div>
    )
}

export default ViewAllFlatBooking;