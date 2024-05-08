import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import uppic from '../assets/upgrade.jpg';
import NavbarAdmin from "../headerfooter/NavbarAdmin";
import { updateAdmin, viewAdminById } from "../../service/AdminService";
import { validEmail, validMobile, validName, validPassword } from "../../service/AuthenticationService";

function UpdateAdmin() {
    const [aId, setAId] = useState('');
    const [aUserName, setAUserName] = useState('');
    const [aPassword, setAPassword] = useState('');
    const [aFirstName, setAFirstName] = useState('');
    const [aLastName, setALastName] = useState('');
    const [aEmail, setAEmail] = useState('');
    const [aRole, setARole] = useState('');
    const [aMobile, setAMobile] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        viewAdminById(id).then(resp => {
            setAId(resp.data.userId);
            setAUserName(resp.data.username);
            setAPassword(resp.data.password);
            setAFirstName(resp.data.firstName);
            setALastName(resp.data.lastName);
            setAEmail(resp.data.email);
            setARole(resp.data.role);
            setAMobile(resp.data.mobile);
        });
    }, [id]);

    const handleSubmit = () => {
        let errors = {};
        if (!aUserName || !aPassword || !aFirstName || !aLastName || !aEmail || !aMobile) {
            errors['nullError'] = "This field is reqiured"
        }

        if (!validPassword.test(aPassword)) {
            errors['aPasswordError'] = "Invalid password"
        }
        if (!validName.test(aFirstName)) {
            errors['aFirstNameError'] = "Invalid first name"
        }
        if (!validName.test(aLastName)) {
            errors['aLastNameError'] = "Invalid last name"
        }

        if (!validEmail.test(aEmail)) {
            errors['aEmailError'] = "Invalid email"
        }

        if (!validMobile.test(aMobile)) {
            errors['aMobileError'] = "Please enter valid number!!"
        }

        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {

            const payload = {
                userId: aId,
                username: aUserName,
                password: aPassword,
                firstName: aFirstName,
                lastName: aLastName,
                email: aEmail,
                role: aRole,
                mobile: aMobile
            }
            updateAdmin(payload)
                .then(resp => {
                    alert("Profile details updated");
                    navigate("/admin/details/" + id);
                }).catch(error => alert(error.response.data));
        }
    }

    return (
        <div class="row">
            <NavbarAdmin />
            <div class="col-9">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 pt-5 ">
                            <img src={uppic} alt='profile img' className="d-block w-100 h-100" />
                        </div>
                        <div class="col-md-6 shadow-lg pt-5 pb-5" style={{ backgroundColor: "rgba(245, 245, 245)" }}>
                            <h2 class="text-center">Flat365</h2>
                            <p class="text-center font-weight-bold text-black-50" style={{ fontSize: "x-large" }}>Update Details</p>

                            <div className="form-group">
                                <input type="number" className="form-control" name="lId" id="lId"
                                    onChange={(event) => setAId(event.target.value)} value={aId} disabled />
                            </div>

                            <div class="form-group">
                                <input type="text" className="form-control" name="lUserName" id="lUserName" placeholder="Create username"
                                    onChange={(event) => setAUserName(event.target.value)} value={aUserName} disabled />
                            </div>

                            <div class="form-group">
                                <div className="row">
                                    <div class="col">

                                        <input type="text" className="form-control" name="lFirstName" id="lFirstName" placeholder="Enter your first name"
                                            onChange={(event) => setAFirstName(event.target.value)} value={aFirstName} />
                                        {
                                            formErrors.aFirstNameError && <div style={{ color: "red" }}>{formErrors.aUserNameError}</div>
                                        }
                                      

                                    </div>
                                    <div class="col">

                                        <input type="text" className="form-control" name="lLastName" id="lLastName" placeholder="Enter your last name"
                                            onChange={(event) => setALastName(event.target.value)} value={aLastName} />
                                        {
                                            formErrors.aLastNameError && <div style={{ color: "red" }}>{formErrors.aLastNameError}</div>
                                        }
                                      

                                    </div>
                                </div>
                            </div>
                            <div class="form-group">

                                <input type="text" className="form-control" name="lEmail" id="lEmail" placeholder="Enter your email"
                                    onChange={(event) => setAEmail(event.target.value)} value={aEmail} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                                {
                                    formErrors.aEmailError && <div style={{ color: "red" }}>{formErrors.aEmailError}</div>
                                }
                               

                            </div>
                            <div class="form-group">

                                <input type="tel" className="form-control" name="lMobile" id="lMobile" placeholder="Enter phone number"
                                    onChange={(event) => setAMobile(event.target.value)} value={aMobile} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                                {
                                    formErrors.aMobileError && <div style={{ color: "red" }}>{formErrors.aMobileError}</div>
                                }
                               

                            </div>
                            <div class="row form-group">
                                <div class="col">

                                    <input type="password" className="form-control" name="lPassword" id="lPassword" placeholder="Create password"
                                        onChange={(event) => setAPassword(event.target.value)} value={aPassword} pattern="[A-Za-z]{3}" />
                                    {
                                        formErrors.aPasswordError && <div style={{ color: "red" }}>{formErrors.aPasswordError}</div>
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
            </div>
        </div>

    )
}
export default UpdateAdmin;