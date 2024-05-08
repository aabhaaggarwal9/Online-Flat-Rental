import React from 'react';
import {Link} from 'react-router-dom';


function Navbar(){
    return(
        <div class="container-fluid">
      
        <nav class="navbar navbar-expand-md bg-dark text-white navbar-dark fixed-top">
          
            <Link to={"/"} class="navbar-brand"><i class="fa fa-home" aria-hidden="true"></i>Flat365</Link>

           
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
           
            <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link to="/login" class="nav-link text-white bg-dark">My Bookings</Link>  
                    </li>
                    <li class="nav-item">
                    <Link to="/login" class="nav-link text-white bg-dark">Post your property</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/login" class="nav-link text-white bg-dark">Login/Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
       
        </div>
    )
}
export default Navbar;