import React, { useState, usestate } from 'react';
import axios from 'axios'
import addflatimg from '../assets/flat.jpg';
import NavbarLandlord from '../headerfooter/NavbarLandlord';
import { useNavigate } from 'react-router-dom';
import { addFlat, validPincode } from '../../service/FlatService';
import Footer from '../headerfooter/Footer';

function AddFlat() {
    const [fCost, setFCost] = useState('');
    const [fFlatType, setFFlatType] = useState('');
    const [fHouseNo, setFHouseNo] = useState(''); 
    const [fBuilding, setFBuilding] = useState('');
    const [fStreet, setFStreet] = useState('');
    const [fCity, setFCity] = useState('');
    const [fState, setFState] = useState('');
    const [fPincode, setFPincode] = useState('');
    const [fCountry, setFCountry] = useState('');
    const [fFlatAddress, setFFlatAddress] = useState('');
    const user=JSON.parse(localStorage.getItem("loginuser"));
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
    const handleSubmit = () => {

        let errors = {};
        if (!fCost || !fFlatType || !fHouseNo || !fBuilding || !fStreet || !fCity || !fState || !fPincode || !fCountry) {
            errors['nullError'] = "This field is reqiured"
        }
        if(fCost<0){
            errors['costError'] ="Cost cannot be negative"
        }
        if(fHouseNo<0){
            errors['houseError'] = "Enter valid house no"
        }
        if(!validPincode.test(fPincode)){
            errors['pincodeError'] = "Enter valid pincode"
        }
      
        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            const payload = {
    
                cost: fCost,
                flatType: fFlatType,
                flatAddress:{
                houseNo:fHouseNo, 
                building:fBuilding,
                street:fStreet,
                city:fCity,
                state:fState,
                pincode:fPincode,
                country:fCountry,
                },
                landlordId: user.userId
            }
            addFlat(payload)
                .then(resp => {
                    alert("New Flat Addition request sent");
                  
                    navigate("/myproperties/"+resp.data.landlord.userId);
                    
                }).catch(errors=>alert(errors.response.data));
        }
    }
    return (
        <div>
        <NavbarLandlord/><br/><br/>
            <div class="page-content page-container m-4 p-4">
        <div class="padding">
            <div class="container rounded">
                <div class="card border-warning d-flex flex-row">
                    <div className="col-6">
                        <img src={addflatimg} className="d-block w-100 h-80" />
                    </div>
                    <div class="col-6 border shadow-lg ">
            <h1 class="card-title text-center" ><b>Add Flat</b></h1><br></br>

            <div className="form-group">
                <label htmlFor='fCost'>Cost</label>
                <input type="text" className="form-control" name="fCost" id="fCost" placeholder="Enter Flat Cost" pattern='/^\d+$/' aria-errormessage='Invalid cost'
                    onChange={(event) => setFCost(event.target.value)} value={fCost} />
                    {
                    formErrors.costError && <div style={{ color: "red" }}>{formErrors.costError}</div>
                }
               
            </div>

            <div className="form-group">
                <label htmlFor='fFlatType'>Flat Type</label>
                <select class="select form-control " name="fFlatType" id="fFlatType" placeholder="Enter Flat Type" onChange={(event) => setFFlatType(event.target.value)} value={fFlatType} >
                <option value="">Select flat type</option>
                                <option value="2-BHK">2-BHK</option>
                                <option value="3-BHK">3-BHK</option>
                                <option value="4-BHK">4-BHK</option>            
                   </select>
                
            </div>

            {/* <div className="form-group">
                <label htmlFor='fAvailability'>Availability</label>
                <select class="select form-control " name="fAvailability" id="fAvailability" placeholder="Enter availability" onChange={(event) => setFAvailability(event.target.value)} value={fAvailability} >
                                <option value="#">Select availability</option>
                                <option value="available">available</option>
                                <option value="not available">not available</option>
                               
                    </select>
                {
                    formErrors.fAvailabilityError && <div style={{ color: "red" }}>{formErrors.fAvailabilityError}</div>
                }
            </div> */}
            <div className="form-group">
                <div class="row">
                    <div class="col-4">
                        <label htmlFor='fHouseNo'>House No.</label>
                        <input type="text" className="form-control" name="fHouseNo" id="fHouseNo" placeholder="Enter House no."

                            onChange={(event) => setFHouseNo(event.target.value)} value={fFlatAddress.houseNo} />
                            {
                    formErrors.houseError && <div style={{ color: "red" }}>{formErrors.houseError}</div>
                }
                        
                    </div>

                    <div class="col-4">
                        <label htmlFor='fBuilding'>Building</label>
                        <input type="text" className="form-control" name="ffBuilding" id="fBuilding" placeholder="Enter building"

                            onChange={(event) => setFBuilding(event.target.value)} value={fFlatAddress.building} />
                        
                    </div>

                    <div class="col-4">
                        <label htmlFor='fStreet'>Street</label>
                        <input type="text" className="form-control" name="fStreet" id="fStreet" placeholder="Enter Street"
                            onChange={(event) => setFStreet(event.target.value)} value={fFlatAddress.street} />
                       
                    </div>
                </div>

                <div className="form-group">
                    <div class="row">
                        <div class="col-4">
                            <label htmlFor='fCity'>City</label>
                            <select class="select form-control " name="fCity" id="fCity"  onChange={(event) => setFCity(event.target.value)} value={fFlatAddress.city}>
                            <option value="">Select City</option>
                                <option value="Amritsar">Amritsar</option>
                                <option value="Pune">Pune</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Nagpur">Nagpur</option>
                                </select>
                           
                        </div>
                        <div class="col-4">
                            <label htmlFor='fState'>State</label>
                            <select class="select form-control" name="fState" id="fState" onChange={(event) => setFState(event.target.value)} value={fFlatAddress.state}>
                                <option value="">Select State</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Maharashtra">Maharashtra</option>
                                </select> 
                           
                        </div>
                        <div class="col-4">
                            <label htmlFor='fPincode'>Pincode</label>
                            <input type="text" className="form-control" name="fPincode" id="fPincode" placeholder="Enter Pincode"

                                onChange={(event) => setFPincode(event.target.value)} value={fFlatAddress.pincode} />
                                {
                    formErrors.pincodeError && <div style={{ color: "red" }}>{formErrors.pincodeError}</div>
                }
                           
                        </div>
                    </div>
                    <label htmlFor='fCountry'>Country</label>
                    <select class="select form-control " name="fCountry" id="fCountry" placeholder="Select Country" onChange={(event) => setFCountry(event.target.value)} value={fFlatAddress.country}    >
                                <option value="">Select country</option>
                                <option value="India">India</option>
                                 </select>
                   
                </div>
            </div>
            {/* <div class="form-group">
                <label htmlFor='fLandlordId'>Landlord Id</label>
                <input type="text" className="form-control" name="fLandlordId" id="fLandlordId" placeholder="Enter Landlord Id"

                    onChange={(event) => setFLandlordId(event.target.value)} value={fLandlord.landlordId} />
                {
                    formErrors.fLandlordIdError && <div style={{ color: "red" }}>{formErrors.fLandlordIdError}</div>
                }

            </div> */}
            <div>
                <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                {
                    formErrors.nullError && <div style={{ color: "red" }}>{formErrors.nullError}</div>
                }

            </div>
            <br></br>
            </div>
        </div>
        </div>
        </div></div>
        
        
        <div>
                <Footer/>
            </div>
        </div>
    )
}
export default AddFlat;
