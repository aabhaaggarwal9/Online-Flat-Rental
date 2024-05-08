import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateFlat, viewFlatById } from '../../service/FlatService';
import updateflat from '../assets/update.jpg';
import NavbarLandlord from '../headerfooter/NavbarLandlord';
function UpdateFlat() {

    const [fId, setFId] = useState('');
    const [fCost, setFCost] = useState('');
    const [fFlatType, setFFlatType] = useState('');
    const [fStatus, setFStatus] = useState('');
    const [fAvailability, setFAvailability] = useState('');
    const [fHouseNo, setFHouseNo] = useState('');
    const [fBuilding, setFBuilding] = useState('');
    const [fStreet, setFStreet] = useState('');
    const [fCity, setFCity] = useState('');
    const [fState, setFState] = useState('');
    const [fPincode, setFPincode] = useState('');
    const [fCountry, setFCountry] = useState('');
    const [fAddId, setFAddId] = useState('');
     const [fLandlordId, setFLandlordId] = useState('');
     const user= JSON.parse(localStorage.getItem("loginuser"));
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        viewFlatById(id).then(resp => {
            setFId(resp.data.flatId);
            setFCost(resp.data.cost);
            setFFlatType(resp.data.flatType);
            setFStatus(resp.data.status);
            setFAvailability(resp.data.availability);
            setFHouseNo(resp.data.flatAddress.houseNo);
            setFBuilding(resp.data.flatAddress.building);
            setFStreet(resp.data.flatAddress.street);
            setFCity(resp.data.flatAddress.city);
            setFState(resp.data.flatAddress.state);
            setFAddId(resp.data.flatAddress.addressId);
            setFPincode(resp.data.flatAddress.pincode);
            setFCountry(resp.data.flatAddress.country);
             setFLandlordId(resp.data.landlord.userId);
        });
    }, [id]);

    const handleSubmit = () => {
        const payload = {
            flatId: fId,
            cost: fCost,
            flatType: fFlatType,
            status:fStatus,
            availability: fAvailability,
            flatAddress:{
                addressId:fAddId,
                houseNo: fHouseNo,
                building: fBuilding,
                street: fStreet,
                city: fCity,
                state: fState,
                pincode: fPincode,
                country: fCountry,
            },
             landlordId: fLandlordId
        }
        updateFlat(payload)
            .then(resp => {
                alert("Flat updated");
                navigate("/myproperties/"+resp.data.landlord.userId);
            });
    }
    return (
        <div>
        <NavbarLandlord/><br/><br/>
        <div class="page-content page-container m-4 p-4">
        <div class="padding">
            <div class="container rounded">
                <div class="card border-warning d-flex flex-row">
                    <div className="col-6 ">
                        <img src={updateflat} className="d-block w-100 h-100 "  />
                    </div>
                    <div class="col-6 border shadow-lg">

            <h1 class="card-title text-center"><b> Update Flat</b></h1><br></br>
          
            <div className="form-group">
                <label htmlFor='fId'>Flat Id</label>
                <input type="text" className="form-control" name="fId" id="fId"
                    onChange={(event) => setFId(event.target.value)} value={fId} disabled />
            </div>

            <div className="form-group">
                <label htmlFor='fCost'>Cost</label>
                <input type="text" className="form-control" name="fCost" id="fCost" placeholder="Enter Flat Cost"
                    onChange={(event) => setFCost(event.target.value)} value={fCost} />
            </div>

            <div className="form-group">
                <label htmlFor='fFlatType'>Flat Type</label>
                <select class="select form-control " name="fFlatType" id="fFlatType" placeholder="Enter Flat Type" onChange={(event) => setFFlatType(event.target.value)} value={fFlatType} >
                    <option value="2-BHK">2-BHK</option>
                    <option value="3-BHK">3-BHK</option>
                    <option value="4-BHK">4-BHK</option>
                </select>
            </div>

            {/*  <div className="form-group">
                <label htmlFor='fAvailability'>Availability</label>
                <select class="select form-control " name="fAvailability" id="fAvailability" placeholder="Enter availability" onChange={(event) => setFAvailability(event.target.value)} value={fAvailability} >
                    <option value="#">Select availability</option>
                    <option value="available">available</option>
                    <option value="not available">not available</option>
                </select> 
            </div> */}
            <div className="form-group">
                <div class="row">
                    <div class="col-4">
                        <label htmlFor='fHouseNo'>House No.</label>
                        <input type="text" className="form-control" name="fHouseNo" id="fHouseNo" placeholder="Enter House no."

                            onChange={(event) => setFHouseNo(event.target.value)} value={fHouseNo} />

                    </div>

                    <div class="col-4">
                        <label htmlFor='fBuilding'>Building</label>
                        <input type="text" className="form-control" name="ffBuilding" id="fBuilding" placeholder="Enter building"

                            onChange={(event) => setFBuilding(event.target.value)} value={fBuilding} />

                    </div>

                    <div class="col-4">
                        <label htmlFor='fStreet'>Street</label>
                        <input type="text" className="form-control" name="fStreet" id="fStreet" placeholder="Enter Street"
                            onChange={(event) => setFStreet(event.target.value)} value={fStreet} />

                    </div>
                </div>

                <div className="form-group">
                    <div class="row">
                        <div class="col-4">
                            <label htmlFor='fCity'>City</label>
                            <select class="select form-control " name="fCity" id="fCity" onChange={(event) => setFCity(event.target.value)} value={fCity}>
                                <option value="#">Select City</option>
                                <option value="Amritsar">Amritsar</option>
                                <option value="Pune">Pune</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Nagpur">Nagpur</option>
                            </select>
                        </div>
                        <div class="col-4">
                            <label htmlFor='fState'>State</label>
                            <select class="select form-control" name="fState" id="fState" onChange={(event) => setFState(event.target.value)} value={fState}>
                                <option value="#">Select State</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Maharashtra">Maharashtra</option>

                            </select>

                        </div>
                        <div class="col-4">
                            <label htmlFor='fPincode'>Pincode</label>
                            <input type="text" className="form-control" name="fPincode" id="fPincode" placeholder="Enter Pincode"

                                onChange={(event) => setFPincode(event.target.value)} value={fPincode} />
                        </div>
                    </div>
                    <label htmlFor='fCountry'>Country</label>
                    <select class="select form-control " name="fCountry" id="fCountry" placeholder="Select Country" onChange={(event) => setFCountry(event.target.value)} value={fCountry}    >
                        <option value="#">Select country</option>
                        <option value="India">India</option>
                    </select>

                </div>
            </div>
             {/* <div class="form-group">
                <label htmlFor='fLandlordId'>Landlord Id</label>
                <input type="text" className="form-control" name="fLandlordId" id="fLandlordId" placeholder="Enter Landlord Id"

                    onChange={(event) => setFLandlordId(event.target.value)} value={fLandlordId} />
            </div> */}
            <div>
                <button onClick={handleSubmit} className="btn btn-primary">Update</button>
            </div>
            <br></br>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
       
    )
}
export default UpdateFlat;