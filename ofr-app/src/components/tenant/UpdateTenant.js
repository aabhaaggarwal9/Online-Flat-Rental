import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import updatepic from '../assets/upgrade.jpg';
import NavbarLandlord from "../headerfooter/NavbarLandlord";
import { updateTenant, viewTenantById } from "../../service/TenantService";
import Footer from "../headerfooter/Footer";
import { validEmail, validMobile, validName, validPassword, validUsername } from "../../service/AuthenticationService";

function UpdateTenant() {
    const [tId, setTId] = useState('');
    const [tUserName, setTUserName] = useState('');
    const [tPassword, setTPassword] = useState('');
    const [tFirstName, setTFirstName] = useState('');
    const [tLastName, setTLastName] = useState('');
    const [tEmail, setTEmail] = useState('');
    const [tAge, setTAge] = useState('');
    const [tGender, setTGender] = useState('');
    const [tMobile, setTMobile] = useState('');

    const [formErrors, setFormErrors] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        viewTenantById(id).then(resp => {
            setTId(resp.data.userId);
            setTUserName(resp.data.username);
            setTPassword(resp.data.password);
            setTFirstName(resp.data.firstName);
            setTLastName(resp.data.lastName);
            setTEmail(resp.data.email);
            setTAge(resp.data.age);
            setTGender(resp.data.gender);
            setTMobile(resp.data.mobile);
        });
    }, [id]);

    const handleSubmit = () => {

        let errors = {};
        if (!tUserName || !tPassword || !tFirstName || !tLastName || !tAge || !tEmail || !tGender || !tMobile) {
            errors['nullError'] = "Fill up all the fields"
        }
        if (tUserName!=null && !validUsername.test(tUserName)) {
            errors['tUserNameError'] = "Invalid username"
        }
        if (tPassword!=null && !validPassword.test(tPassword)) {
            errors['tPasswordError'] = "Invalid password"
        }
        if (tFirstName!=null && !validName.test(tFirstName)) {
            errors['tFirstNameError'] = "Invalid First name"
        }
        if (tLastName!=null && !validName.test(tLastName)) {
            errors['tLastNameError'] = "Invalid Last name"
        }
        if (tEmail!=null && !validEmail.test(tEmail)) {
            errors['tEmailError'] = "Invalid Email"
        }
        if (tAge!=null && tAge < 18) {
            errors['tAgeError'] = "Age below 18 cannot signup"
        }

        if (tMobile!=null && !validMobile.test(tMobile)) {
            errors['tMobileError'] = "Please enter valid number!!"
        }

        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {

        const payload = {
            userId: tId,
            username: tUserName,
            password: tPassword,
            firstName: tFirstName,
            lastName: tLastName,
            email: tEmail,
            age: tAge,
            gender: tGender,
            mobile: tMobile
        }
        updateTenant(payload)
            .then(resp => {
                alert("Profile details updated");
                navigate("/tenant/details/"+id);
            }) .catch(error=> alert(error.response.data));
    }
}

    return (
        <div>
            <NavbarLandlord/><br/><br/><br/>
        <div class="container">
            <div class="row">
            <div class="col-md-6 pt-5 ">
                        <img src={updatepic} alt='update img' className="d-block w-100 h-100" />
                    </div>
                <div class="col-md-6 shadow-lg pb-5" style={{ backgroundColor: "rgba(245, 245, 245)" }}>
                    <h2 class="text-center">Flat365</h2>
                    <p class="text-center font-weight-bold text-black-50" style={{ fontSize: "x-large" }}>Update Details</p>
                    
                        <div className="form-group">
                            <input type="number" className="form-control" name="lId" id="lId"
                                onChange={(event) => setTId(event.target.value)} value={tId} disabled />
                        </div>
                        <div class="form-group">
                            <input type="text" className="form-control" name="tUserName" id="tUserName" placeholder="Create username"
                                onChange={(event) => setTUserName(event.target.value)} value={tUserName} disabled/>
                                {
                                formErrors.tUserNameError && <div style={{ color: "red" }}>{formErrors.tUserNameError}</div>
                            }
                        </div>

                        <div class="form-group">
                            <div className="row">
                                <div class="col">

                                    <input type="text" className="form-control" name="tFirstName" id="tFirstName" pattern="[A-Za-z]" placeholder="Enter your first name"
                                        onChange={(event) => setTFirstName(event.target.value)} value={tFirstName} />
                                        {
                                        formErrors.tFirstNameError && <div style={{ color: "red" }}>{formErrors.tFirstNameError}</div>
                                    }

                                </div>
                                <div class="col">

                                    <input type="text" className="form-control" name="tLastName" id="tLastName" pattern="[A-Za-z]" placeholder="Enter your last name"
                                        onChange={(event) => setTLastName(event.target.value)} value={tLastName} />
                                        {
                                        formErrors.tLastNameError && <div style={{ color: "red" }}>{formErrors.tLastNameError}</div>
                                    }

                                </div>
                            </div>
                        </div>
                        <div class="form-group">

                            <input type="text" className="form-control" name="tEmail" id="tEmail" placeholder="Enter your email"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                onChange={(event) => setTEmail(event.target.value)} value={tEmail} />
                                {
                                formErrors.tEmailError && <div style={{ color: "red" }}>{formErrors.tEmailError}</div>
                            }

                        </div>
                        <div class="row form-group">
                            <div class="col">

                                <input type="number" className="form-control" name="tAge" id="tAge" placeholder="Enter your age" min="18"
                                    onChange={(event) => setTAge(event.target.value)} value={tAge} />
                                     {
                                    formErrors.tAgeError && <div style={{ color: "red" }}>{formErrors.tAgeError}</div>
                                }

                            </div>
                            <div class="col">
                                <select class="form-control" id="gender"
                                    onChange={(event) => setTGender(event.target.value)} value={tGender}>

                                    <option value="#">Gender</option>
                                    <option value="male">Male</option>
                                    <option vlaue="female">Female</option>
                                    <option vlaue="others">Others</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">

                            <input type="tel" className="form-control" name="tMobile" id="tMobile"  pattern="[789][0-9]{9}" placeholder="Enter phone number"
                                onChange={(event) => setTMobile(event.target.value)} value={tMobile} />
                                {
                                formErrors.tMobileError && <div style={{ color: "red" }}>{formErrors.tMobileError}</div>
                            }

                        </div>
                        <div class="row form-group">
                            <div class="col">

                                <input type="password" className="form-control" name="tPassword" id="tPassword" pattern="/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g" placeholder="Create password"
                                    onChange={(event) => setTPassword(event.target.value)} value={tPassword} />
                                     {
                                    formErrors.tPasswordError && <div style={{ color: "red" }}>{formErrors.tPasswordError}</div>
                                }

                            </div>
                        </div>
                        <div class="form-group">
                            <button onClick={handleSubmit} className="btn btn-dark btn-block">Update</button>
                            {
                                formErrors.nullError && <div style={{ color: "red" }}>{formErrors.nullError}</div>
                            }
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
export default UpdateTenant;


