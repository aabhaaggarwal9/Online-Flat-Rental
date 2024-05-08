import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import NavbarAdmin from "../headerfooter/NavbarAdmin";
import { viewAllLandlord } from "../../service/LandlordService";
import Footer from "../headerfooter/Footer";

function ViewAllLandlord() {

    const [landlords, setLandlords] = useState([]);

    useEffect(() => {
        viewAllLandlord().then(resp => setLandlords(resp.data));
    }, []);

    return (
        <div class="row">
      <NavbarAdmin/>
      <div class="col-9">
        <div className="container shadow-lg mt-5">
            {
                landlords.length > 0 &&

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
                            landlords.map(l => <tr key={l.userId}>
                                <td>{l.userId}</td>
                                <td>{l.username}</td>
                                <td>{l.password} </td>
                                <td>{l.firstName}</td>
                                <td>{l.lastName}</td>
                                <td> {l.email}</td>
                                <td> {l.age}</td>
                                <td> {l.gender}</td>
                                <td> {l.mobile}</td>
                                <td><Link to={`/landlord/delete/${l.userId}`}><i class="fa fa-trash" aria-hidden="true"></i></Link></td>
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
export default ViewAllLandlord;
