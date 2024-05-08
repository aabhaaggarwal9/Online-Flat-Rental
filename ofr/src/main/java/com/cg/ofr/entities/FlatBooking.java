package com.cg.ofr.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.FutureOrPresent;

import org.checkerframework.checker.optional.qual.Present;

@Entity
@Table(name = "flatbooking_tbl")
public class FlatBooking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "booking_no", length = 20)
	private int bookingNo;

	@FutureOrPresent(message = "Invalid date")
	@Column(name = "booking_from")
	private LocalDate bookingFrom;

	@Column(name = "booking_to")
	private LocalDate bookingTo;

	@Column(name = "members")
	private int members;
	
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Column(name = "status")
	private String status;
	
	@ManyToOne
	@JoinColumn(name = "flat")
	private Flat flat;

	@ManyToOne
	@JoinColumn(name = "tenant")
	private Tenant tenant;

	public int getBookingNo() {
		return bookingNo;
	}

	public void setBookingNo(int bookingNo) {
		this.bookingNo = bookingNo;
	}

	public LocalDate getBookingFrom() {
		return bookingFrom;
	}

	public void setBookingFrom(LocalDate bookingFrom) {
		this.bookingFrom = bookingFrom;
	}

	public LocalDate getBookingTo() {
		return bookingTo;
	}

	public void setBookingTo(LocalDate bookingTo) {
		this.bookingTo = bookingTo;
	}

	public int getMembers() {
		return members;
	}

	public void setMembers(int members) {
		this.members = members;
	}

	public Flat getFlat() {
		return flat;
	}

	public void setFlat(Flat flat) {
		this.flat = flat;
	}

	public Tenant getTenant() {
		return tenant;
	}

	public void setTenant(Tenant tenant) {
		this.tenant = tenant;
	}
}
