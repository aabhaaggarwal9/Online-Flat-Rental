import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import flatimage from '../assets/flat.jpg';
import NavbarAdmin from '../headerfooter/NavbarAdmin';
import { updateFlat, viewFlatById } from '../../service/FlatService';
import Footer from '../headerfooter/Footer';


function ViewFlatApproval() {

    const [fCost, setFCost] = useState('');
    const [fFlatType, setFFlatType] = useState('');
    const [fAvailability, setFAvailability] = useState('');
    const [fHouseNo, setFHouseNo] = useState('');
    const [fBuilding, setFBuilding] = useState('');
    const [fStreet, setFStreet] = useState('');
    const [fCity, setFCity] = useState('');
    const [fState, setFState] = useState('');
    const [fAddressId, setFAddressId] = useState('');
    const [fPincode, setFPincode] = useState('');
    const [fCountry, setFCountry] = useState('');
    const [fLandlordId, setFLandlordId] = useState('');
    const [flat, setFlat] = useState(null);
    const [fId, setFId] = useState('');
    const{id}=useParams();
    const navigate = useNavigate();

    useEffect(() => {

        viewFlatById(id).then(resp => {
            setFId(resp.data.flatId);
            setFCost(resp.data.cost);
            setFFlatType(resp.data.flatType);
            setFAvailability(resp.data.availability);
            setFHouseNo(resp.data.flatAddress.houseNo);
            setFBuilding(resp.data.flatAddress.building);
            setFStreet(resp.data.flatAddress.street);
            setFCity(resp.data.flatAddress.city);
            setFState(resp.data.flatAddress.state);
            setFPincode(resp.data.flatAddress.pincode);
            setFCountry(resp.data.flatAddress.country);
            setFAddressId(resp.data.flatAddress.addressId);
            setFLandlordId(resp.data.landlord.userId);
            setFlat(resp.data);

        });

    }, [id]);

    const handleSubmit = (event) => {
        const payload = {
            flatId: fId,
            cost: fCost,
            flatType: fFlatType,
            availability: fAvailability,
            status: event.target.name,
            flatAddress: {
                addressId:fAddressId,
                houseNo: fHouseNo,
                building: fBuilding,
                street: fStreet,
                city: fCity,
                state: fState,
                pincode: fPincode,
                country: fCountry
            },
            landlordId: fLandlordId
        }
        updateFlat(payload).then(resp => {
            alert("flat " + resp.data.status);
            navigate("/flat/approval/all");
        });
    }

    return (
        <div class="row">
      <NavbarAdmin/>
      <div class="col-9">
        <div>
            {
                flat !== null &&
                <div class="container m-5 p-5 bg-light border border-warning">
                    <div class="row">

                        <div class="col-sm-6">
                            <img src={flatimage} class="d-block w-100 h-100" />
                        </div>
                        <div class="col-sm-6">
                            <div class="card-body bg-light">
                                <h4 class="card-title text-center">Flat Details</h4><hr></hr>
                                <p class="card-text">
                                    <div class="row">
                                        <div class="col">
                                            <h6>Address</h6>
                                            <p>{flat.flatAddress.houseNo}, {flat.flatAddress.building}, {flat.flatAddress.street}, {flat.flatAddress.city}, {flat.flatAddress.state}, {flat.flatAddress.pincode}, {flat.flatAddress.country}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <h6>Cost</h6>
                                            <i class="fa fa-inr" aria-hidden="true"></i><p class="d-inline">{flat.cost}</p>
                                        </div>
                                        <div class="col">
                                            <h6>FlatType</h6>
                                            <i class="fa fa-bed" aria-hidden="true"></i> <p class="d-inline">{flat.flatType}</p>
                                        </div>
                                    </div><br></br>
                                    <div class="row">
                                        <div class="col">
                                            <h6>Availability</h6>
                                            <p>{flat.availability}</p>
                                        </div>
                                        <div class="col">
                                            <h6>Landlord</h6>
                                            <p class="d-inline">{flat.landlord.firstName} {flat.landlord.lastName}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <input type="button" class="btn btn-success" name="approved" value="Approve" onClick={handleSubmit} />
                                        </div>
                                        <div class="col">
                                            <input type="button" class="btn btn-danger" name="rejected" value="Decline" onClick={handleSubmit} />
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
        </div>
        <div>
                <Footer/>
            </div>
        </div>

    )
}
export default ViewFlatApproval;