import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import NavbarAdmin from "../headerfooter/NavbarAdmin";
import dlt from '../assets/delete.gif';
import { deleteTenant, viewTenantById } from "../../service/TenantService";
import Footer from "../headerfooter/Footer";

function DeleteTenant() {
  const [tenant, setTenant] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
  viewTenantById(id)
      .then((resp) => setTenant(resp.data));
  }, [id]);

  const handleDelete = () => {
    deleteTenant(id).then((resp) => {
      alert("Tenant deleted with id: " + id);
      navigate("/tenant/all");
    }).catch(error=> alert(error.response.data));
  };
  return (
    <div class="row">
      <NavbarAdmin />
      <div class="col-9">
        <div class="page-content page-container">
          <div class="padding">
            <div class="container rounded">
              <div class="card border-warning d-flex flex-row">
                <div className="col-sm-6">
                  <img src={dlt} alt='profile img' className="d-block w-100 h-100" />
                </div>
                <div class="col-sm-6">
                  <div class="card-body bg-light">
                    <h4 class="card-title">Delete Tenant</h4>
                    <hr />
                    {
                      tenant !== null && (
                        <p class="card-text">
                          <div class="row">
                            <div class="col">
                              <h6>UserId:</h6>
                            </div>
                            <div class="col">
                              <p>{tenant.userId}</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col">
                              <h6>UserName:</h6>
                            </div>
                            <div class="col">
                              <p>{tenant.username}</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col">
                              <h6>FirstName:</h6>
                            </div>
                            <div class="col">
                              <p>{tenant.firstName}</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col">
                              <h6>LastName:</h6>
                            </div>
                            <div class="col">
                              <p>{tenant.lastName}</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col">
                              <h6>Email:</h6>
                            </div>
                            <div class="col">
                              <p>{tenant.email}</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col">
                              <h6>Role:</h6>
                            </div>
                            <div class="col">
                              <p>{tenant.role}</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col">
                              <h6>Age:</h6>
                            </div>
                            <div class="col">
                              <p>{tenant.age}</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col">
                              <h6>Gender:</h6>
                            </div>
                            <div class="col">
                              <p>{tenant.gender}</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col">
                              <h6>Phone number:</h6>
                            </div>
                            <div class="col">
                              <p>{tenant.mobile}</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col">
                              <h6>Password:</h6>
                            </div>
                            <div class="col">
                              <p>{tenant.password}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <button onClick={handleDelete} className="btn btn-danger">Delete <i class="fa fa-trash" aria-hidden="true"></i></button>
                            </div>
                            <div className="col">
                              <a href="#">
                                <Link to={"/tenant/all"} className="btn btn-secondary ">Back <i class="fa fa-chevron-left" aria-hidden="true"></i></Link>
                              </a>

                            </div>
                          </div>
                        </p>
                      )}
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
  );
}
export default DeleteTenant;
