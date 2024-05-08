import React from "react";
import { Link } from "react-router-dom";
import Footer from "../headerfooter/Footer";
import NavbarTenant from "../headerfooter/NavbarTenant";

function Tenant() {
    const user = JSON.parse(localStorage.getItem("loginuser"));
    return (
        <div>
            <NavbarTenant /><br/><br/>
            <div className="container-fluid">
                <section>
                    <div class="row" style={{ backgroundColor: "rgb(255, 179, 0)" }}>
                        <div class="col-4 mt-5 mb-5">
                            <p class="text-center">
                                <i class="fa-solid fa-calendar-days fa-5x"></i>

                            </p>
                            <Link to={`/flatbooking/tenant/${user.userId}`} class="text-center h2 text-dark font-weight-bold"> My Booking</Link>
                        </div>
                        <div class="col-4 mt-5 mb-5">
                            <p class="text-center">
                                <i class="fa-solid fa-magnifying-glass fa-5x"></i>
                            </p>
                            <Link  to={"/flat/all"} class="text-center h2 text-dark font-weight-bold">Search Flat </Link>

                        </div>
                        <div class="col-4 mt-5 mb-5">
                            <p class="text-center">
                            <i class="fa-solid fa-user-tie fa-5x"></i>
                            </p>
                            <Link to={`/tenant/details/${user.userId}`} class="text-center h2 text-dark font-weight-bold"> My Profile</Link>

                        </div><br></br><br></br><br></br>

                    </div><br></br><br></br><br></br>
                    <div>
                        <h4 class="text-muted text-center">HOW TO BOOK</h4>
                        <h1 class="text-center">A Flat in</h1>
                        <h1 class="text-center">3 Simple Steps</h1><br></br><br></br>
                        <div class="row">
                            <div class="col-4 p-5">
                                <p class="badge badge-pill badge-warning">&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-magnifying-glass fa-3x"></i>&nbsp;&nbsp;&nbsp;</p>
                                <h5>01. Search Flat </h5>
                                <p class="text-muted">Begin by searching flats of your choice
                                    by preferred location.
                                </p>


                            </div>
                            <div class="col-4 p-5">
                                <p class="badge badge-pill badge-warning">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-calendar-days fa-3x"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                <h5>02. Make Bookings</h5>
                                <p class="text-muted">Book your favorite flat by giving
                                    basic details.

                                </p>

                            </div>
                            <div class="col-4 p-5">
                                <p class="badge badge-pill badge-warning">&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-check-to-slot fa-3x"></i>&nbsp;&nbsp;&nbsp;</p>
                                <h5>03. Wait For Approval</h5>
                                <p class="text-muted">Once approved by concerned people,
                                    get settled in your dream home.
                                </p>

                            </div>

                        </div>
                    </div>
                    <div class="text-center">
                        <Link to={"/flat/all"} class="btn btn-warning">Search Your Flat</Link>

                    </div><br></br>




                </section>

            </div>
            <Footer/>

        </div>
    )

}
export default Tenant;