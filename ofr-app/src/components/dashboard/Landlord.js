import React from "react";
import { Link } from "react-router-dom";
import Footer from "../headerfooter/Footer";
import NavbarLandlord from "../headerfooter/NavbarLandlord";

function Landlord() {
    const user = JSON.parse(localStorage.getItem("loginuser"));
    return (
        <div>
            <div className="container-fluid">
                <div>
                    <NavbarLandlord/>
                </div><br/><br/><br/>
                <section>
                    
                    <div class="row" style={{ backgroundColor: "rgb(255, 179, 0)" }}>
                        <div class="col-4 mt-5 mb-5">
                            <p class="text-center">
                                <i class="fa-solid fa-gears fa-5x"></i>

                            </p>
                            <Link to={`/myproperties/${user.userId}`} class="text-center h2 text-dark font-weight-bold"> My Properties</Link>
                        </div>
                        <div class="col-4 mt-5 mb-5">
                            <p class="text-center">
                                <i class="fa-solid fa-house-medical fa-5x"></i>
                            </p>
                            <Link to={"/flat/add"} class="text-center h2 text-dark font-weight-bold">Add Flat </Link>

                        </div>
                        <div class="col-4 mt-5 mb-5">
                            <p class="text-center">
                                <i class="fa-sharp fa-solid fa-house-circle-check fa-5x"></i>
                            </p>
                            <Link to={"/flatbooking/approval/landlord/all"} class="text-center h2 text-dark font-weight-bold"> Pending Approvals</Link>

                        </div><br></br><br></br><br></br>

                    </div><br></br><br></br><br></br>
                    <div>
                        <h4 class="text-muted text-center">HOW TO POST</h4>
                        <h1 class="text-center">Post Your Property in</h1>
                        <h1 class="text-center">3 Simple Steps</h1><br></br><br></br>
                        <div class="row">
                            <div class="col-4 p-5">
                                <p class="badge badge-pill badge-warning">&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-circle-info fa-3x"></i>&nbsp;&nbsp;&nbsp;</p>
                                <h5>01. Add details of your property</h5>
                                <p class="text-muted">Begin by telling us the few basic details about your
                                    property like your property type, location and number of rooms etc.
                                </p>


                            </div>
                            <div class="col-4 p-5">
                                <p class="badge badge-pill badge-warning">&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-images fa-3x"></i>&nbsp;&nbsp;&nbsp;</p>
                                <h5>02. Upload Photos & Videos</h5>
                                <p class="text-muted">Upload photos and videos of your property either
                                    via your desktop device or from your mobile phone.

                                </p>

                            </div>
                            <div class="col-4 p-5">
                                <p class="badge badge-pill badge-warning">&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-indian-rupee-sign fa-3x"></i>&nbsp;&nbsp;&nbsp;</p>
                                <h5>03. Add Pricing & Ownership</h5>
                                <p class="text-muted">Just update your properties ownership details and
                                    your price and your property is ready for posting.
                                </p>

                            </div>

                        </div>
                    </div>
                    <div class="text-center">
                        <Link to={"/flat/add"} class="btn btn-warning">Begin To Post Your Property</Link>

                    </div><br></br>




                </section>

            </div>
            <div>
                <Footer/>
            </div>

        </div>
    )

}
export default Landlord;