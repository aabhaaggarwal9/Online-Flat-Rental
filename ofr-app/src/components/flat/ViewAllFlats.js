import React, { useEffect, useState } from "react";
import { Link} from 'react-router-dom'
import axios from "axios";
import flatimg from "../assets/card222.jpg";
import NavbarTenant from "../headerfooter/NavbarTenant";
import { flatSearch } from "../../service/FlatService";
import Footer from "../headerfooter/Footer";


function ViewAllFlats() {

    const [flats, setFlats] = useState([]);
    const [city, setCity] = useState('');

    useEffect(() => {
        flatSearch().then(resp => setFlats(resp.data));
    }, []);

    // const selectCity = () => {
    //     axios.get("http://localhost:8080/flat/city/" + city).then(resp => setFlats(resp.data));
    // }

    return (
        <div>
        <NavbarTenant/>
        <div><br/><br/><br/>
            {
                <main>
                    {
                        flats.length > 0 &&
                        <div class="container p-5 m-5">
                            <div class="btn btn-warning d-flex justify-content-center">
                                <select class="form-select row col-lg-12" onChange={(event) => setCity(event.target.value)} value={city} >
                                    <option value="">Select City</option>
                                    <option value="Amritsar">Amritsar</option>
                                    <option value="Pune">Pune</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Nagpur">Nagpur</option>
                                </select>
                                
                            </div><br></br><br></br>
                            {
                                city != '' ?
                                    <div class="card-deck row">
                                        {
                                            flats.filter(f => f.flatAddress.city === city).filter(f => f.availability === 'available').map(f => 
                                                <div class="col-4 mb-5">
                                                    <div class="card ">
                                                        <img class="card-img-top " src={flatimg} />
                                                        <div class="card-body text-center">
                                                            <h5 class="card-title">{f.flatType}</h5>
                                                            <p class="card-text">{f.flatAddress.street},{f.flatAddress.city},{f.flatAddress.state}</p>
                                                            <p class="card-text">Owned By: {f.landlord.firstName} {f.landlord.lastName}</p>
                                                            <Link to={`/flat/details/${f.flatId}`} className="btn btn-primary">More Details</Link>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        }
                                    </div>
                                    : <div class="card-deck row">
                                        {
                                            flats.filter(f => f.availability === 'available').map(f => 
                                                <div class="col-4 mb-5">
                                                    <div class="card ">
                                                        <img class="card-img-top " src={flatimg} />
                                                        <div class="card-body text-center">
                                                            <h5 class="card-title">{f.flatType}</h5>
                                                            <p class="card-text">{f.flatAddress.street},{f.flatAddress.city},{f.flatAddress.state}</p>
                                                            <p class="card-text">Owned By: {f.landlord.firstName} {f.landlord.lastName}</p>
                                                            <Link to={`/flat/details/${f.flatId}`} className="btn btn-primary">More Details</Link>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        }
                                    </div>

                            }
                        </div>

                    }
                    {
                    flats.length==0 &&
                    city=='' &&
                        <div class="card">
                    <div class="card-body">
                      No flats available
                    </div>
                  </div>
                }
                </main>
                
            }
            
        </div><br/><br/>
        <div>
                <Footer/>
            </div>
        </div>
    )


}


export default ViewAllFlats;