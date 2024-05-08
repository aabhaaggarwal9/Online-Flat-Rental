import React from "react";
import { Link } from "react-router-dom";
import NavbarAdmin from "../headerfooter/NavbarAdmin";

function Admin() {

    return (
        <div>
            <div class="row">
      <NavbarAdmin/>
      <div class="col-9">
            <div className="container-fluid">
                <section>
                    <div class="bg-light pb-3 pt-3">
                        <h2>Dashboard</h2>
                        <p>Welcome to admin panel</p>
                    </div>
                    <div class="row" style={{ backgroundColor: "rgb(255, 179, 0)" }}>
                        <div class="col mt-5 mb-5">
                            <p class="text-center">
                                <i class="fa-solid fa-users fa-5x"></i>

                            </p>
                            <Link to={"/tenant/all"} class="text-center text-dark h2 font-weight-bold"> Manage Users</Link>
                        </div>
                        <div class="col mt-5 mb-5">
                            <p class="text-center">
                                <i class="fa-solid fa-building-user fa-5x"></i>
                            </p>
                            <Link to={"/admin/flat/all"} class="text-center text-dark h2 font-weight-bold">Manage Flats</Link>

                        </div>


                    </div>
                    <div class="row"style={{ backgroundColor: "rgb(255, 179, 0)" }}>
                        <div class="col mt-5 mb-5">
                            <p class="text-center">
                                <i class="fa-solid fa-calendar-days fa-5x"></i>
                            </p>
                            <Link to={"/flatbooking/all"} class="text-center text-dark h2 font-weight-bold">Manage Bookings</Link>

                        </div>
                        <div class="col mt-5 mb-5">
                            <p class="text-center">
                                <i class="fa-sharp fa-solid fa-house-circle-check fa-5x"></i>
                            </p>
                            <Link to={"/flatbooking/approval/all"} class="text-center text-dark h2 font-weight-bold"> Pending Approvals</Link>

                        </div>


                    </div>

                </section>
            </div>
        </div>
        </div>
        </div>

    )
}
export default Admin;