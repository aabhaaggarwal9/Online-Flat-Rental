import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import NavbarAdmin from '../headerfooter/NavbarAdmin';
import { viewAllFlats } from '../../service/FlatService';
import Footer from '../headerfooter/Footer';



function AdminViewAllFlats() {
  const [flats, setFlats] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    viewAllFlats().then(resp => setFlats(resp.data));
  }, []);

  return (
    <div class="row">
      <NavbarAdmin/>
      <div class="col-9">
    <div class="container">
      <div class="mb-3 mt-3">

        <h4>ViewAllFlat</h4>

      </div>
      {

        flats.length>0 &&
        <table class="table table-striped table-light shadow-lg">

          <thead class="thead-dark">

            <tr>
              <th>Flat Id</th>
              <th>Type</th>
              <th>Cost</th>
              <th>Landlord</th>
              <th>Availability</th>
              <th>status</th>
              <th> </th>
              <th> </th>
              <th> </th>
            </tr>
            
          </thead>
          <tbody>
            {
              flats.map(f => <tr key={f.flatId}>

                <td>{f.flatId}</td>
                <td>{f.flatType}</td>
                <td>{f.cost}</td>
                <td>{f.landlord.userId}</td>
                <td>{f.availability}</td>
                <td>{f.status}</td>
                
                <td><Link to={`/admin/flat/details/${f.flatId}`}><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
                <td><Link to={`/admin/flat/update/${f.flatId}`}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link></td>
                <td><Link to={`/flat/delete/${f.flatId}`}><i class="fa fa-trash" aria-hidden="true"></i></Link></td>

              </tr>)
            }

          </tbody>

        </table>}
</div>
    </div>
    <div>
            
                <Footer/>
            
            </div>
</div>
  )

}

export default AdminViewAllFlats;

