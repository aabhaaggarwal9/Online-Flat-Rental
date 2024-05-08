import React from 'react';
import Footer from '../headerfooter/Footer';
import Navbar from '../headerfooter/Navbar';
import NavbarLandlord from '../headerfooter/NavbarLandlord';
import NavbarTenant from '../headerfooter/NavbarTenant';
function ContactUs() {
  const user = JSON.parse(localStorage.getItem("loginuser"));
    return (
      <div>
      <header>
      {
                      user==null && <Navbar/>
                      
                  }
                  {
                      user!=null && 
                      user.role==='admin' && <Navbar/>
                  }
                  {
                      user!=null &&
                      user.role==='tenant' && <NavbarTenant/>

                  }
                   {
                      user!=null &&
                      user.role==='landlord' && <NavbarLandlord/>
                      
                  }
      </header><br/><br/>
        
<div class="container">
    <p class="text-center bg-warning text-dark h-75 w-100  pt-5 pb-5"> <h1>Get In Touch! </h1></p>
    <div class="container-fluid pt-5">
        <div class="row">

        <div class="col-8 p-5">
          <h3 class="fg">Get in Touch!</h3>
          <p class="lead">In case of any issues,reach out to us!</p>
    <div class="container-fluid shadow mt-4 mb-3 p-3">
    <h5 class="fg">OUR LOCATION</h5>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.5910682428794!2d74.8750673146342!3d31.64504514814244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919635867f9480b%3A0x8797a2306e525812!2sLawrence%20Road%2C%20Amritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1652525470792!5m2!1sen!2sin"
      width="100%" height="250px" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
    </div>
    <div class="col-4 p-5 bg-dark text-light mb-4 h-50 mt-4">
          <h4 class="mb-3">CONTACT DETAILS</h4>
         
          <p class="mb-5">Please find below contact details and contact us today!</p>
          <div class="mb-3">
      
            <p class="d-inline">Lawrence Road, Amritsar</p>
          </div>
          <div class="mb-3">
      
            <p class="d-inline">flat365@gmail.com</p>
          </div>
          <div class="mb-3">
      
            <p class="d-inline">+91 98765 43210</p>
          </div>
          <div class="mb-5">
      
            <p class="d-inline">08:00am - 09:00pm</p>
          </div>
    </div></div>
    </div></div>
    <Footer/>
   </div>
   
    )
}
export default ContactUs;
