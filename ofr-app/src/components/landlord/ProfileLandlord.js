import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, userParams } from 'react-router-dom';
import proimg from '../assets/profileimage.gif';
import NavbarLandlord from "../headerfooter/NavbarLandlord";
import { viewLandlordById } from "../../service/LandlordService";
import Footer from "../headerfooter/Footer";

function FetchLandlord() {

    const [landlord, setLandlord] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        viewLandlordById(id).then(resp => setLandlord(resp.data));
    }, [id]);

    return (
        <div>
            <NavbarLandlord/><br/><br/>
        <div className='container bg-light border border-warning m-4'>
            {
                landlord !== null &&
                <div className="row">
                    <div className="col-sm-6">
                        <img src={proimg} alt='profile img' className="d-block w-100 h-100" />
                    </div>
                    <div className="col-sm-6">
                        <div className="card-body bg-light">
                            <h4 className="card-title">Landlord Details</h4><hr />
                            <p className="card-text">
                                <div className="row">
                                    <div className="col">
                                        <h6>User Id</h6>
                                    </div>
                                    <div>
                                        <p>{landlord.userId}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6>User Name</h6>
                                    </div>
                                    <div>
                                        <p>{landlord.username}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6>Password</h6>
                                    </div>
                                    <div>
                                        <p>{landlord.password}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6>First Name</h6>
                                    </div>
                                    <div>
                                        <p>{landlord.firstName}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6>Last Name</h6>
                                    </div>
                                    <div>
                                        <p>{landlord.lastName}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6>Email</h6>
                                    </div>
                                    <div>
                                        <p>{landlord.email}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6>Age</h6>
                                    </div>
                                    <div>
                                        <p>{landlord.age}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6>Gender</h6>
                                    </div>
                                    <div>
                                        <p>{landlord.gender}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6>Mobile</h6>
                                    </div>
                                    <div>
                                        <p>{landlord.mobile}</p>
                                    </div>
                                </div>
                                <br></br>
                                <div class="form-group">
                                <Link to={`/landlord/update/${landlord.userId}`} className="btn btn-warning">Update <i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            }
        </div>
        <div>
            <Footer/>
        </div>
</div>
    )
}

export default FetchLandlord;