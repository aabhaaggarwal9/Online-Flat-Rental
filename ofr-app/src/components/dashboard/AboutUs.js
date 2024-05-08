import React from 'react';
import aboutimg from '../assets/aboutus.jpg';
import Footer from '../headerfooter/Footer';
import Navbar from '../headerfooter/Navbar';
import NavbarLandlord from '../headerfooter/NavbarLandlord';
import NavbarTenant from '../headerfooter/NavbarTenant';
function AboutUs() {
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
        </header><br/><br/><br/><br/><br/>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img src={aboutimg} className="d-block w-100 h-80"/>
                </div>
                <div class="col-8 bg-warning">
                    <h3 >Our Story</h3>
                    <p class="text-justify ">Flat365 is an online marketplace .We emerge out of the need to simplify home search
                        process we boasts of being a true companion to a Home Seeker in his journey of finding a Home.</p>
                    <p class="text-justify "> We at Flat365 are not only focused to provide rent property
                        information but also information on pre-buying and post buying particulars and specific information like
                        loan guidance, home tips . You will find expert advice to all your queries about maintenance of your
                        abode will be answered here.</p>
                    <p class="text-justify "> A New home rental platform that makes it easier to find your new home without
                        paying any brokerage. Flat365 is portal deals with every aspect of the consumers’ needs in the real estate industry. It is an
                        online forum where buyers, sellers and brokers/agents can exchange information about houses properties quickly,
                        effectively and inexpensively.</p>
                </div>
                </div>
        </div><br/><br/>
        <div>
            <Footer/>
        </div>
        </div>
    )
}
export default AboutUs;