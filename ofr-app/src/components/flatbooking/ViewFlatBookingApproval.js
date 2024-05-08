import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import flatimage from '../assets/flat-icon-aimation.gif';
import NavbarAdmin from '../headerfooter/NavbarAdmin';
import { updateFlatBooking, viewFlatBookingById } from '../../service/FlatBookingService';

function ViewFlatBookingApproval() {
    const navigate = useNavigate();
    const [flatBooking, setFlatBooking] = useState(null);
    const [bStatus, setBStatus] = useState('');
    const [bNo, setBNo] = useState('');
    const [bTo, setBTo] = useState('');
    const [bFrom, setBFrom] = useState('');
    const [bMembers, setBMembers] = useState('');
    const [bFlatId, setBFlatId] = useState('');
    const [bTenantId, setBTenantId] = useState('');
    const { id } = useParams();

    useEffect(() => {
        viewFlatBookingById(id).then(resp => {
            setBFlatId(resp.data.flat.flatId);
            setBMembers(resp.data.members);
            setBNo(resp.data.bookingNo);
            setBTo(resp.data.bookingTo);
            setBFrom(resp.data.bookingFrom);
            setBTenantId(resp.data.tenant.userId);
            setFlatBooking(resp.data);
            setBStatus(resp.data.status);
        }).catch(error=> alert(error.response.data));
    }, [id]);

    const handleSubmit = (event) => {
        const payload = {
            bookingNo: bNo,
            bookingFrom: bFrom,
            bookingTo: bTo,
            members: bMembers,
            flatId: bFlatId,
            tenantId: bTenantId,
            status: event.target.name
        }
        updateFlatBooking(payload).then(resp => {
            alert("flatbooking " + resp.data.status);
            navigate("/flatbooking/approval/all");
        }).catch(error=> alert(error.response.data));
    }

    return (
        <div class="row">
        <NavbarAdmin/>
        <div class="col-9">
        <div className='container bg-light border border-warning'>
            {
                flatBooking !== null &&
                <div className='row'>
                    <div class="col-sm-6">
                        <img src={flatimage} alt='flat' class="d-block w-100 h-100" />
                    </div>
                    <div class="col-sm-6">
                        <div class="card-body bg-light">
                            <h4 class="card-title">Booking Details</h4><hr />
                            <p class="card-text">
                                <div class="row">
                                    <div class="col">
                                        <h6>Booking No</h6>
                                    </div>
                                    <div class="col">
                                        <p>{flatBooking.bookingNo}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <h6>Booking From</h6>
                                        <i class="fa fa-calendar" aria-hidden="true"><p class="d-inline"> {flatBooking.bookingFrom}</p></i>
                                    </div>
                                    <div class="col">
                                        <h6>Booking To</h6>
                                        <i class="fa fa-calendar" aria-hidden="true"><p class="d-inline"> {flatBooking.bookingTo}</p></i>
                                    </div>
                                </div><br />
                                <div class="row">
                                    <div class="col">
                                        <h6>Members</h6>
                                    </div>
                                    <div class="col">
                                        <p>{flatBooking.members}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <h6>Cost</h6>
                                        <i class="fa fa-inr" aria-hidden="true"><p class="d-inline"> {flatBooking.flat.cost}</p></i>
                                    </div>
                                    <div class="col">
                                        <h6>Apartment Type</h6>
                                        <i class="fa fa-bed" aria-hidden="true"><p class="d-inline"> {flatBooking.flat.flatType}</p></i>
                                    </div>
                                </div><br />
                                <div class="row">
                                    <div class="col">
                                        <h6>Address</h6>
                                        <p>{flatBooking.flat.flatAddress.houseNo}, {flatBooking.flat.flatAddress.building}, {flatBooking.flat.flatAddress.street}, {flatBooking.flat.flatAddress.city}, {flatBooking.flat.flatAddress.state}, {flatBooking.flat.flatAddress.country}, pincode-{flatBooking.flat.flatAddress.pincode}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <h6>Landlord</h6>
                                        <p class="d-inline">{flatBooking.flat.landlord.firstName} {flatBooking.flat.landlord.lastName}</p>
                                    </div>
                                    <div class="col">
                                        <h6>Contact</h6>
                                        <i class="fa fa-mobile" aria-hidden="true"><p class="d-inline">{flatBooking.flat.landlord.mobile}</p></i>
                                    </div>
                                </div><br />
                                <div class="row">
                                    <div class="col">
                                        <h6>Status</h6>
                                    </div>
                                    <div class="col">
                                        <p>{flatBooking.status}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <input type="button" class="btn btn-success" name="approved" value="Approve" onClick={handleSubmit} />
                                    </div>
                                    <div class="col">
                                        <input type="button" class="btn btn-danger" name="rejected" value="Decline" onClick={handleSubmit} />
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            }
        </div>
        </div>
        </div>
    )
}

export default ViewFlatBookingApproval;