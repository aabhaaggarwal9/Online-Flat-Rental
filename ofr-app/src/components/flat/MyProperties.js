import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import NavbarLandlord from '../headerfooter/NavbarLandlord';
import { myProperties } from '../../service/FlatService';
import Footer from '../headerfooter/Footer';



function MyProperties() {
  const [flats, setFlats] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    myProperties(id).then(resp => setFlats(resp.data));
  }, []);

  return (
    <div>
            <NavbarLandlord/><br/><br/>
    <div class="container">
      

      <div class="mb-3 mt-3">

        <h4>My Properties</h4>

      </div>
      {

        flats.length>0 &&
        <table class="table table-striped table-light shadow-lg">

          <thead class="thead-dark">

            <tr>
              <th>Flat Id</th>
              <th>cost</th>
              <th>Flat Type</th>
              <th>Availability</th>
              <th>Status</th>
              <th>Location</th>
              <th> </th>
            </tr>
            
          </thead>
          <tbody>
            {
              flats.map(f => <tr key={f.flatId}>
                <td>{f.flatId}</td>
                <td>{f.cost}</td>
                <td>{f.flatType}</td>
                <td>{f.availability}</td>
                <td>{f.status}</td>
                <td>{f.flatAddress.city}, {f.flatAddress.state}</td>
                <td><Link to={`/myproperty/${f.flatId}`}><button type="button" class="btn btn-outline-dark">Check Details</button></Link></td>

              </tr>)
            }

          </tbody>

        </table>}
        {
          flats.length==0 &&
          <div class="card">
          <div class="card-body">
            No property added
          </div>
        </div>
        }

    </div><br/><br/>
    <div>
                <Footer/>
            </div>
</div>
  )

}

export default MyProperties;

