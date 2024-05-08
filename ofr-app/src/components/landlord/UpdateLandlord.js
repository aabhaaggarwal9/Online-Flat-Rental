import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import update from '../assets/upgrade.jpg';
import NavbarLandlord from "../headerfooter/NavbarLandlord";
import { updateLandlord, viewLandlordById } from "../../service/LandlordService";
import Footer from "../headerfooter/Footer";
import { validEmail, validMobile, validName, validPassword, validUsername } from "../../service/AuthenticationService";

function UpdateLandlord() {
    const [lId, setLId] = useState('');
    const [lUserName, setLUserName] = useState('');
    const [lPassword, setLPassword] = useState('');
    const [lFirstName, setLFirstName] = useState('');
    const [lLastName, setLLastName] = useState('');
    const [lEmail, setLEmail] = useState('');
    const [lRole, setLRole] = useState('');
    const [lAge, setLAge] = useState('');
    const [lGender, setLGender] = useState('');
    const [lMobile, setLMobile] = useState('');

    const [formErrors, setFormErrors] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        viewLandlordById(id).then(resp => {
            setLId(resp.data.userId);
            setLUserName(resp.data.username);
            setLPassword(resp.data.password);
            setLFirstName(resp.data.firstName);
            setLLastName(resp.data.lastName);
            setLEmail(resp.data.email);
            setLRole(resp.data.role)
            setLAge(resp.data.age);
            setLGender(resp.data.gender);
            setLMobile(resp.data.mobile);
        });
    }, [id]);

    const handleSubmit = () => {

        let errors = {};
        if (!lUserName || !lPassword || !lFirstName || !lLastName || !lAge || !lEmail || !lGender || !lMobile || !lRole) {
            errors['nullError'] = "Fill up all the fields"
        }
        if (lUserName != null && !validUsername.test(lUserName)) {
            errors['lUserNameError'] = "Invalid username"
        }
        if (lPassword != null && !validPassword.test(lPassword)) {
            errors['lPasswordError'] = "Invalid password"
        }
        if (lFirstName != null && !validName.test(lFirstName)) {
            errors['lFirstNameError'] = "Invalid First name"
        }
        if (lLastName != null && !validName.test(lLastName)) {
            errors['lLastNameError'] = "Invalid Last name"
        }
        if (lEmail != null && !validEmail.test(lEmail)) {
            errors['lEmailError'] = "Invalid Email"
        }
        if (lAge != null && lAge < 18) {
            errors['lAgeError'] = "Age below 18 cannot signup"
        }

        if (lMobile != null && !validMobile.test(lMobile)) {
            errors['lMobileError'] = "Please enter valid number!!"
        }

        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {

            const payload = {
                userId: lId,
                username: lUserName,
                password: lPassword,
                firstName: lFirstName,
                lastName: lLastName,
                email: lEmail,
                role: lRole,
                age: lAge,
                gender: lGender,
                mobile: lMobile
            }
            updateLandlord(payload)
                .then(resp => {
                    alert("Profile details Updated");
                    navigate("/landlord/details/" + id);
                }).catch(error => alert(error.response.data));
        }
    }

    return (
        <div>
            <NavbarLandlord /><br /><br /><br />
            <div class="container">
                <div class="row">
                    <div class="col-md-6 pt-5 ">
                        <img src={update} alt='profile img' className="d-block w-100 h-100" />
                    </div>
                    <div class="col-md-6 shadow-lg pb-5" style={{ backgroundColor: "rgba(245, 245, 245)" }}>
                        <h2 class="text-center">Flat365</h2>
                        <p class="text-center font-weight-bold text-black-50" style={{ fontSize: "x-large" }}>Update Details</p>

                        <div className="form-group">
                            <input type="number" className="form-control" name="lId" id="lId"
                                onChange={(event) => setLId(event.target.value)} value={lId} disabled />
                        </div>
                        <div class="form-group">
                            <input type="text" className="form-control" name="lUserName" id="lUserName" placeholder="Create username"
                                onChange={(event) => setLUserName(event.target.value)} value={lUserName} disabled />
                            {
                                formErrors.lUserNameError && <div style={{ color: "red" }}>{formErrors.lUserNameError}</div>
                            }
                        </div>

                        <div class="form-group">
                            <div className="row">
                                <div class="col">

                                    <input type="text" className="form-control" name="lFirstName" id="lFirstName" pattern="[A-Za-z]" placeholder="Enter your first name"
                                        onChange={(event) => setLFirstName(event.target.value)} value={lFirstName} />
                                    {
                                        formErrors.lFirstNameError && <div style={{ color: "red" }}>{formErrors.lFirstNameError}</div>
                                    }
                                </div>
                                <div class="col">

                                    <input type="text" className="form-control" name="lLastName" id="lLastName" pattern="[A-Za-z]" placeholder="Enter your last name"
                                        onChange={(event) => setLLastName(event.target.value)} value={lLastName} />
                                    {
                                        formErrors.lLastNameError && <div style={{ color: "red" }}>{formErrors.lLastNameError}</div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div class="form-group">

                            <input type="text" className="form-control" name="lEmail" id="lEmail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Enter your email"
                                onChange={(event) => setLEmail(event.target.value)} value={lEmail} />
                            {
                                formErrors.lEmailError && <div style={{ color: "red" }}>{formErrors.lEmailError}</div>
                            }

                        </div>
                        <div class="row form-group">
                            <div class="col">

                                <input type="number" className="form-control" name="lAge" min="18" id="lAge" placeholder="Enter your age"
                                    onChange={(event) => setLAge(event.target.value)} value={lAge} />
                                {
                                    formErrors.lAgeError && <div style={{ color: "red" }}>{formErrors.lAgeError}</div>
                                }

                            </div>
                            <div class="col">
                                <select class="form-control" id="gender"
                                    onChange={(event) => setLGender(event.target.value)} value={lGender}>

                                    <option value="#">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">

                            <input type="tel" className="form-control" name="lMobile" id="lMobile" pattern="[789][0-9]{9}" placeholder="Enter phone number"
                                onChange={(event) => setLMobile(event.target.value)} value={lMobile} />
                            {
                                formErrors.lMobileError && <div style={{ color: "red" }}>{formErrors.lMobileError}</div>
                            }

                        </div>
                        <div class="row form-group">
                            <div class="col">

                                <input type="password" className="form-control" name="lPassword" pattern="/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g" id="lPassword" placeholder="Create password"
                                    onChange={(event) => setLPassword(event.target.value)} value={lPassword} />
                                {
                                    formErrors.lPasswordError && <div style={{ color: "red" }}>{formErrors.lPasswordError}</div>
                                }

                            </div>
                            <div class="col">
                                <select class="form-control" id="role"
                                    onChange={(event) => setLRole(event.target.value)} value={lRole} disabled>

                                    <option value="#">Select type of user</option>
                                    <option value="landlord">Landlord</option>
                                    <option value="tenant">Tenant</option>
                                </select>
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
                <Footer />
            </div>
        </div>
    )
}
export default UpdateLandlord;