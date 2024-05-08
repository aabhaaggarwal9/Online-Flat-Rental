import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import deleteimg from '../assets/delete.gif';
import NavbarAdmin from '../headerfooter/NavbarAdmin';
import { deleteFlat, viewFlatById } from '../../service/FlatService';
import Footer from '../headerfooter/Footer';

function DeleteFlat() {
    const [flat, setFlat] = useState(null);
    const { id } = useParams();
    const navigate=useNavigate();


    useEffect(() => {
        viewFlatById(id).then(resp => setFlat(resp.data));
    }, [id]);

    const handleDelete = () => {
        deleteFlat(id).then(resp => {
            alert("Flat deleted");
            navigate("/admin/flat/all");

        }).catch(error=> alert(error.response.data));
    }
    return (
        <div class="row">
      <NavbarAdmin/>
      <div class="col-9">
        <div class="page-content page-container m-4 p-4">
            <div class="padding">
                <div class="container rounded">
                    <div class="card border-warning d-flex flex-row">
                        <div className="col-sm-6">
                            <img src={deleteimg} className="d-block w-100 h-100" />
                        </div>
                        <div class="col-sm-6">
                            <div class="card-body h-100 bg-light">
                                <h2 class="card-title">Delete Flat</h2><hr />
                                <br></br>
                                {
                                    flat !== null &&
                                    <div>
                                        <p class="card-text">
                                            <div class="row">
                                                <div class="col">
                                                    <p>Flat Id:{flat.flatId}</p>
                                                </div>
                                                <div class="col">
                                                    <p>Cost:{flat.cost}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <p>FlatType:{flat.flatType}</p>
                                                </div>
                                                <div class="col">
                                                    <p>Availability:{flat.availability}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <p>HouseNo:{flat.flatAddress.houseNo}</p>
                                                </div>
                                                <div class="col">
                                                    <p>Building:{flat.flatAddress.building}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <p>Street:{flat.flatAddress.street}</p>
                                                </div>
                                                <div class="col">
                                                    <p>City:{flat.flatAddress.city}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <p>State:{flat.flatAddress.state}</p>
                                                </div>
                                                <div class="col">
                                                    <p>Pincode:{flat.flatAddress.pincode}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <p>Country:{flat.flatAddress.country}</p>
                                                </div>
                                                <div class="col">
                                                    <p>LandlordId:{flat.landlord.userId}</p>
                                                </div>
                                            </div>
                                            <br></br>
                                            <div>
                                                
                                                <button onClick={handleDelete} className="btn btn-danger">Delete <i class="fa fa-trash" aria-hidden="true"></i></button>  
                                            </div>

                                        </p>
                                    </div>
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
export default DeleteFlat;