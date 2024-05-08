import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import dlt from '../assets/delete.gif';
import NavbarAdmin from "../headerfooter/NavbarAdmin";
import { deleteLandlord, viewLandlordById } from "../../service/LandlordService";
import Footer from "../headerfooter/Footer";

function DeleteLandlord() {
    const [landlord, setLandlord] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        viewLandlordById(id).then(resp => setLandlord(resp.data));
    }, [id]);

    const handleDelete = () => {
       deleteLandlord(id).then(resp => {
            alert("Landlord deleted with id: " + id);
            navigate("/landlord/all");
        }).catch(error=> alert(error.response.data));
    }
    return (
        <div class="row">
        <NavbarAdmin/>
        <div class="col-9">
        <div class="page-content page-container m-4">
            <div class="padding">
                <div class="container rounded">
                    <div class="card border-warning d-flex flex-row">
                        <div className="col-sm-6">
                            <img src={dlt} alt='profile img' className="d-block w-100 h-100" />
                        </div>
                        <div class="col-sm-6">
                            <div class="card-body bg-light">
                                <h4 class="card-title">Delete Landlord</h4><hr />
                                {
                                    landlord !== null &&
                                    <p class="card-text">
                                        <div class="row">
                                            <div class="col">
                                                <h6>UserId:</h6>
                                            </div>
                                            <div class="col">
                                                <p>{landlord.userId}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <h6>UserName:</h6>
                                            </div>
                                            <div class="col">
                                                <p>{landlord.username}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <h6>FirstName:</h6>
                                            </div>
                                            <div class="col">
                                                <p>{landlord.firstName}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <h6>LastName:</h6>
                                            </div>
                                            <div class="col">
                                                <p>{landlord.lastName}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <h6>Email:</h6>
                                            </div>
                                            <div class="col">
                                                <p>{landlord.email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <h6>Role:</h6>
                                            </div>
                                            <div class="col">
                                                <p>{landlord.role}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <h6>Age:</h6>
                                            </div>
                                            <div class="col">
                                                <p>{landlord.age}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <h6>Gender:</h6>
                                            </div>
                                            <div class="col">
                                                <p>{landlord.gender}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <h6>Phone number:</h6>
                                            </div>
                                            <div class="col">
                                                <p>{landlord.mobile}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <h6>Password:</h6>
                                            </div>
                                            <div class="col">
                                                <p>{landlord.password}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <button onClick={handleDelete} className="btn btn-danger">Delete <i class="fa fa-trash" aria-hidden="true"></i></button>
                                            </div>
                                            <div className="col">
                                                <a href="#">
                                                    <Link to={"/landlord/all"} className="btn btn-secondary ">Back <i class="fa fa-chevron-left" aria-hidden="true"></i></Link>
                                                </a>

                                            </div>
                                        </div>
                                    </p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    )
}
export default DeleteLandlord;