import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import forgetimg from "../assets/forgetpassword.jpg";
import { forgetPassword } from "../../service/AuthenticationService";
import Navbar from "../headerfooter/Navbar";
import Footer from "../headerfooter/Footer";

function ForgetPassword() {

    const [fEmail, setFEmail] = useState('');
    const [fRole, setFRole] = useState('');
    const [fPassword, setFPassword] = useState('');
    const [fCPassword, setFCPassword] = useState('');

    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = () => {
        let errors = {};
        if (!fPassword || !fEmail || !fRole || !fCPassword) {
            errors['nullError'] = "This field is required"
        }
        if (fPassword != fCPassword) {
            errors['passwordError'] = "Password not matching"
        }
        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {

            const payload = {
                role: fRole,
                email: fEmail,
                password: fPassword

            }

            forgetPassword(payload)
                .then(resp => {
                    alert("New password set");
                    navigate("/login");
                }).catch(error => alert(error.response.data));
        }
    }

    return (
        <div>
            <Navbar /><br /><br /><br />
            <div class="container">
                {
                    <div class="row">
                        <div class="col-md-6">
                            <img src={forgetimg} class="d-block w-100" />
                        </div>
                        <div class="col-md-6 shadow-lg" style={{ backgroundColor: "rgba(245, 245, 245)" }}>
                            <h2 class="text-center"><i class="fa fa-home" aria-hidden="true"></i>Flat365</h2><br />
                            <p class="text-center font-weight-bold text-black-50" style={{ fontSize: "x-large" }}>
                                Forgot Your Password?</p>
                            <p> Get new password in two easy steps:</p>
                            <p>1.Enter your Email.</p>
                            <p>1.Select Role</p>
                            <p>2.Enter New Password</p>
                            <form>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Enter your email" id="fEmail" name="fEmail" value={fEmail} onChange={(event) => setFEmail(event.target.value)} required />
                                  
                                </div>
                                <div class="form-group">
                                    <select class="form-control" id="fRole" name="fRole" value={fRole} onChange={(event) => setFRole(event.target.value)}>
                                        <option value="">Select type of user</option>
                                        <option value="admin">Admin</option>
                                        <option value="landlord">Landlord</option>
                                        <option value="tenant">Tenant</option>
                                    </select>
                                 
                                </div>

                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Enter new password" id="fPassword" name="fPassword" value={fPassword} onChange={(event) => setFPassword(event.target.value)} required />
                                   
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Confirm new password" id="fCPassword" name="fCPassword" value={fCPassword} onChange={(event) => setFCPassword(event.target.value)} required />
                                   
                                    {
                                        formErrors.passwordError && <div style={{ color: "red" }}>{formErrors.passwordError}</div>
                                    }
                                </div>
                                <div class="form-group">
                                    <button type="button" class="btn btn-dark btn-block" onClick={handleSubmit}>Reset Password</button>
                                    {
                                        formErrors.nullError && <div style={{ color: "red" }}>{formErrors.nullError}</div>
                                    }

                                </div>
                            </form>
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </div>
    )
}
export default ForgetPassword;