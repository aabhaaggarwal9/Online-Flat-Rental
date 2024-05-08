import React from 'react';
import {Link} from 'react-router-dom';


function NavbarAdmin(){
    const user=JSON.parse(localStorage.getItem("loginuser"));

    return(
        <div class="col-3">
            {
            <nav class="navbar bg-light" >
                <ul class="nav navbar-nav" style={{height:"590px"}}>
                    <li class="nav-item">
                        <Link to={"/admindashboard"} class="navbar-brand text-black-50"><i class="fa fa-home" aria-hidden="true"></i>Flat365</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={"/admindashboard"} class="nav-link text-black-50"> Dashboard </Link>
                    </li>
                    <li class="nav-item">
                        <Link to={`/admin/details/${user.userId}`} class="nav-link text-black-50"> Profile </Link>
                    </li>
                    <li class="nav-item">
                        <Link to={"/admin/flat/all"} class="nav-link text-black-50"> Manage Properties</Link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-black-50" href="#" id="navbardrop"
                            data-toggle="dropdown">
                            Manage Users
                        </a>
                        <div class="dropdown-menu">
                            <Link to={"/landlord/all"} class="dropdown-item bg-light">Landlord</Link>
                            <Link to={"/tenant/all"} class="dropdown-item bg-light">Tenant</Link>
                        </div>
                    </li>
                    <li class="nav-item">
                        <Link to={"/flatbooking/all"} class="nav-link text-black-50"> Manage Bookings</Link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-black-50" href="#" id="navbardrop"
                            data-toggle="dropdown">
                           Pending Approvals
                        </a>
                        <div class="dropdown-menu">
                            <Link to={"/flat/approval/all"} class="dropdown-item bg-light">Flat</Link>
                            <Link to={"/flatbooking/approval/all"} class="dropdown-item bg-light">FlatBooking</Link>
                            
                        </div>
                    </li>
                   
                    <li class="nav-item">
                        <Link to={"/logout"} class="nav-link text-black-50">  Logout </Link>
                    </li>
                </ul>
            </nav>
}
        </div>
    )
}

export default NavbarAdmin;