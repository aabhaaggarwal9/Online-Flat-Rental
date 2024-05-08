import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavbarAdmin from '../headerfooter/NavbarAdmin';
import { viewAllTenant } from '../../service/TenantService';
import Footer from '../headerfooter/Footer';
// viewalltenant
function ViewAllTenant() {

    const [tenants, setTenants] = useState([]);

    useEffect(() => {
        viewAllTenant().then(resp => setTenants (resp.data));
          },[]);
    
          return (
            <div class="row">
          <NavbarAdmin/>
          <div class="col-9">
            <div className="container shadow-lg mt-5">
                {
                    tenants.length > 0 &&
    
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>UserId</th>
                                <th>UserName</th>
                                <th>Password</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Mobile</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tenants.map(t => <tr key={t.userId}>
                                    <td>{t.userId}</td>
                                    <td>{t.username}</td>
                                    <td>{t.password} </td>
                                    <td>{t.firstName}</td>
                                    <td>{t.lastName}</td>
                                    <td> {t.email}</td>
                                    <td> {t.age}</td>
                                    <td> {t.gender}</td>
                                    <td> {t.mobile}</td>
                                    <td><Link to={`/tenant/delete/${t.userId}`}><i class="fa fa-trash" aria-hidden="true"></i></Link></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                }
    
            </div>
            </div>
            <div>
                <Footer/>
            </div>
            </div>
        )
}
export default ViewAllTenant;