import React from 'react';

import{Link, useNavigate} from 'react-router-dom';
import logoutimg from "../assets/logout.jpg";

 function Logout(){
  const userlogin=JSON.parse(localStorage.getItem("loginuser"));
    const navigate= useNavigate();

    const logout=()=>{

        const user=localStorage.getItem("loginuser");

        if(user!==null){

            localStorage.removeItem("loginuser");

            navigate("/");

        }

    }

    return(
  <center>
    <div class="container">
    <div class="card mt-5 border-warning" style={{width:"500px"}}>
  <img class="card-img-top" src={logoutimg} alt="Card image"/>
  <div class="card-img-overlay">
    <p class="card-text" style={{fontSize:"large"}}>Are you sure you want to logout ?</p>
    <div class="row">
        <div class="col">
    <Link to={"/"} class="btn btn-warning" onClick={logout}>Logout</Link>
    </div>
    
    <div class="col">
      {
        userlogin.role=='admin' && <Link to={"/admindashboard"} class="btn btn-danger">Cancel</Link>
      }
      {
        userlogin.role=='tenant' &&
    <Link to={"/tenantdashboard"} class="btn btn-danger">Cancel</Link>
 }
  {
        userlogin.role=='landlord' &&
    <Link to={"/landlorddashboard"} class="btn btn-danger">Cancel</Link>
 }
    </div>
 
    </div>
  </div>
</div>
</div>
</center>        
    )
 }

 export default Logout;