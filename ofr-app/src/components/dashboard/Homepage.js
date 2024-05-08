import React, { useEffect, useState } from "react";
import { Link} from 'react-router-dom'
import axios from "axios";
//import "bootstrap-icons/font/bootstrap-icons.css";
import img1 from "../assets/flat2.jpg"
import img2 from "../assets/5.jpg"
import img3 from "../assets/3.jpeg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/card1.jpg"
import Navbar from "../headerfooter/Navbar";
import NavbarTenant from "../headerfooter/NavbarTenant";
import NavbarLandlord from "../headerfooter/NavbarLandlord";
import Footer from "../headerfooter/Footer";
import { flatSearch } from "../../service/FlatService";

function Homepage() {
    // const [flats, setFlats] = useState([]);
    const user = JSON.parse(localStorage.getItem("loginuser"));
    // useEffect(() => {
    //     flatSearch().then(resp => setFlats(resp.data));
    // }, []);

    return (
        <div>
            <div class="container-fluid">
                <header>
                {
                        user==null && <Navbar/>
                        
                    }
                    {
                        user!=null && 
                        user.role==='admin' && <Navbar/>
                    }
                    {/* {
                        user!=null &&
                        user.role==='tenant' && <NavbarTenant/>

                    }
                     {
                        user!=null &&
                        user.role==='landlord' && <NavbarLandlord/>
                        
                    } */}
                    <div class="row justify-content-center ">
                        <div>
                            <div>
                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" data-interval="3000">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active h-25">
                                            <img src={img1} class="d-block  " alt="..." style={{height:"460px"}}
                                                width="1260rem" />
                                        </div>
                                        <div class="carousel-item h-25">
                                            <img src={img2} class="d-block " alt="..." style={{height:"460px"}}
                                                width="1260rem" />
                                        </div>
                                        <div class="carousel-item h-25">
                                            <img src={img3} class="d-block  " alt="..." style={{height:"460px"}}
                                                width="1260rem" />
                                        </div>
                                        <div class="carousel-item h-25">
                                            <img src={img4} class="d-block " alt="..." style={{height:"460px"}}
                                                width="1260rem" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div><br></br>
                        <div>
                            </div><br></br>
                        <div class="text-center">
                            <span class="badge badge-pill badge-danger">
                                <h4><i class="fa fa-home fa-1x" aria-hidden="true"></i>&nbsp;&nbsp;Lets find a home thats
                                    perfect for you</h4>
                            </span>

                        </div>
                    </div>
                </header><br></br><br></br>
                <section>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="card " style={{backgroundColor:"rgba(0, 229, 255, 0.345)"}}>

                                <div class="card-body">
                                    <h5 class="card-title">Get 15 days Free stay &nbsp;&nbsp; <i
                                        class="fa-brands fa-squarespace fa-2x"></i></h5>
                                    <p class="card-text">Book a home with Flat365 and get 15 days Free Stay</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card" style={{backgroundColor:"rgba(122, 96, 214, 0.523)"}}>
                                <div class="card-body">
                                    <h5 class="card-title">Zero Deposit Homes &nbsp;&nbsp; <i class="fa fa-life-ring fa-2x"
                                        aria-hidden="true"></i></h5>
                                    <p class="card-text">Applicable on selected houses *TandC apply. Coupon code is not required
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card" style={{backgroundColor:"rgb(78, 242, 45)"}}>
                                <div class="card-body">
                                    <h5 class="card-title">Refer owner and earn Rs 1000 &nbsp;&nbsp; <i
                                        class="fa-solid fa-handshake-simple fa-2x"></i></h5>
                                    <p class="card-text">Refer your previous owner or a friend who owns a house and is looking
                                        for tenants</p>
                                </div>
                            </div>
                        </div>
                    </div><br></br><br></br>
                    <div class="container-fluid" style={{backgroundColor:"rgba(255, 174, 0, 0.918)"}}>
                        <div class="row p-5">
                            <div class="col-2">
                                <h2 class="text-center">Designed For Everyone</h2>
                            </div>
                            <div class="col-1">
                                <h2 class="text-left"></h2>
                            </div>
                            <div class="col-3">
                                <h4 class="text-center">Homes For Families</h4><br></br>
                                <div class="text-center">
                                    <span ><i
                                        class="fa-solid fa-people-group fa-4x"></i>&nbsp;&nbsp;</span><br></br><br></br>
                                    <p class="text-left">Rent a beautiful house for your family. Choose from flats in societies,
                                        individual apartments, bungalows & villas</p>
                                </div>
                            </div>
                            <div class="col-3">
                                <h4 class="text-center">Homes For Friends</h4><br></br>
                                <div class="text-center">
                                    <span ><i class="fa-solid fa-user-group fa-4x"></i>
                                        &nbsp;&nbsp;</span><br></br><br></br>

                                    <p class="text-left">Rent a bachelor friendly house with your friends. Choose from flats in societies, individual apartments, bungalows & villas</p>
                                </div>
                            </div>
                            <div class="col-3">
                                <h4 class="text-center">Homes Just For You</h4><br></br>
                                <div class="text-center">
                                    <span ><i class="fa-sharp fa-solid fa-person fa-4x"></i>
                                        &nbsp;&nbsp;</span><br></br><br></br>

                                    <p class="text-left">Rent a shared room or a private room for yourself. Choose from flats in societies or individual apartments</p>
                                </div>
                            </div>
                        </div>
                    </div><br></br><br></br>
                        {/* <div class="p-5">
                            {
                                flats.length > 0 &&
                                <div>
                                    <h2>Recently Added</h2><br></br><br></br>
                                    <div class="card-deck">
                                        {
                                            flats.slice(2).map(f => 
                                                    <div class="card" >
                                                        <img class="card-img-top" src={img5} alt="Card image cap" />
                                                        <div class="card-body">
                                                            <h5 class="card-title">{f.flatType}</h5>
                                                            <p class="card-text">Price: {f.cost}</p>
                                                            <p class="card-text"><small class="text-muted">{f.flatAddress.street},{f.flatAddress.city},{f.flatAddress.state}, {f.flatAddress.country}</small></p>
                                                            <Link to={`/flat/details/${f.flatId}`} className="btn btn-primary">More Details</Link>
                                                        </div>
                                                    </div>
                                            )
                                        }
                                    </div>
                                </div>
                        }

                    </div> */}
                </section>
                {/* <footer>
                    <div class=" container-fluid bg-dark text-white pt-4 pb-4 ">
                        <div class="container">
                            <div class="row">
                                <div class="col-4">
                                    <h3 class="mb-4">Find Flat</h3>
                                    <p>At Flat365, you can advertise a Home/flat, search for a house, browse through properties,
                                        and keep
                                        yourself updated with the latest news and trends making headlines in the realty sector.
                                    </p>
                                    <p> +91 9876543210</p>
                                    <p>Lawrence Road,Amritsar,Punjab</p>
                                    <p>flat365@gmail.com</p>

                                </div>
                                <div class="col-2 pt-2">
                                    <h4 class="text-center mb-4">Navigation
                                        <hr width="50%" size="5" class="ms-5 bg" />
                                    </h4>

                                    <ul style={{listStyle:"none"}}>

                                        <li class="mb-2"><a class="text-white  " href="#">Home</a></li>

                                        <li class="mb-2"><a class="text-white  " href="#">About</a></li>

                                        <li class="mb-2"><a class="text-white  " href="#">Contact</a></li>

                                        <li class="mb-2"><a class="text-white  " href="#">My Profile</a></li>

                                    </ul>
                                </div>
                                <div class="col-3 pt-2">
                                    <h4 class="text-center mb-4">Search Property
                                        <hr width="50%" size="5" class="ms-5 bg"/>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer> */}
                {
                 <Footer/>   
                }
            </div>

        </div>
    )
}

export default Homepage;
