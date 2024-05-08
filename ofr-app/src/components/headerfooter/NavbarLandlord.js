import React from 'react';
import {Link} from 'react-router-dom';
import MyProperties from '../flat/MyProperties';


function NavbarLandlord(){
    const user=JSON.parse(localStorage.getItem("loginuser"));
    return(
        <div class="container-fluid">
        <nav class="navbar navbar-expand-md bg-dark text-white navbar-dark fixed-top">
            <Link to={"/landlorddashboard"} class="navbar-brand"><i class="fa fa-home" aria-hidden="true"></i>Flat365</Link>

           
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link to={`/myproperties/${user.userId}`} class="nav-link text-white bg-dark">My Properties</Link>  
                    </li>
                    <li class="nav-item">
                    <Link to={"/flat/add"} class="nav-link text-white bg-dark">Post your property</Link>  
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-white bg-dark" href="#" id="navbardrop" data-toggle="dropdown">
                            Profile
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <Link class="dropdown-item bg-light" to={`/landlord/details/${user.userId}`}>My Profile</Link>
                            <Link class="dropdown-item bg-light" to={"/flatbooking/approval/landlord/all"}>Pending Approvals</Link>
                            <Link class="dropdown-item bg-light" to="/logout">Logout</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
       
        </div>
    )
}
export default NavbarLandlord;