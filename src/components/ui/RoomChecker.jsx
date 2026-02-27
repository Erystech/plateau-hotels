import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "./buttons";

const RoomChecker = () => {
  const navigate = useNavigate();
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!checkInDate) errs.checkIn = "Check-in date is required";
    if (!checkOutDate) errs.checkOut = "Check-out date is required";
    if (guests < 1) errs.guests = "At least 1 guest required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate
    const errs = validate();
    setErrors(errs);
    
    if (Object.keys(errs).length > 0) {
      return;
    }

    // Calculate nights
    const nights = Math.round((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));

    // Build query params
    const params = new URLSearchParams({
      checkIn: checkInDate.toISOString(),
      checkOut: checkOutDate.toISOString(),
      guests: guests,
      nights: nights,
    });

    // Navigate to rooms page with search params
    navigate(`/rooms?${params.toString()}`);
  };

  const inputClass = (field) =>
    `w-full border rounded-lg px-4 py-2.5 text-stone-800 placeholder-stone-400 text-sm bg-white focus:outline-none focus:ring-2 focus:border-transparent transition ${
      errors[field]
        ? "border-red-400 focus:ring-red-300"
        : "border-stone-300 focus:ring-amber-400"
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white/95 backdrop-blur-md shadow-2xl rounded-xl border border-white/40 px-8 py-6 flex flex-col md:flex-row gap-5 items-end"
    >

      {/* ── Check-in ── */}
      <div className="flex flex-col gap-1.5 w-full">
        <label className="text-[10px] text-stone-500 uppercase tracking-widest font-medium">
          Check-in Date
        </label>
        <DatePicker
          selected={checkInDate}
          onChange={(date) => {
            setCheckInDate(date);
            setCheckOutDate(null);
            setErrors((prev) => ({ ...prev, checkIn: null }));
          }}
          dateFormat="dd MMM yyyy"
          placeholderText="Select date"
          minDate={new Date()}
          className={inputClass("checkIn")}
          wrapperClassName="w-full"
        />
        {errors.checkIn && (
          <p className="text-red-500 text-[11px]">{errors.checkIn}</p>
        )}
      </div>

      {/* ── Check-out ── */}
      <div className="flex flex-col gap-1.5 w-full">
        <label className={`text-[10px] uppercase tracking-widest font-medium ${!checkInDate ? "text-stone-300" : "text-stone-500"}`}>
          Check-out Date
        </label>
        <DatePicker
          selected={checkOutDate}
          onChange={(date) => {
            setCheckOutDate(date);
            setErrors((prev) => ({ ...prev, checkOut: null }));
          }}
          dateFormat="dd MMM yyyy"
          placeholderText={!checkInDate ? "Select check-in first" : "Select date"}
          minDate={
            checkInDate
              ? new Date(checkInDate.getTime() + 86400000)
              : new Date()
          }
          disabled={!checkInDate}
          className={`${inputClass("checkOut")} ${!checkInDate ? "bg-stone-100 cursor-not-allowed" : ""}`}
          wrapperClassName="w-full"
        />
        {errors.checkOut && (
          <p className="text-red-500 text-[11px]">{errors.checkOut}</p>
        )}
      </div>

      {/* ── Guests ── */}
      <div className="flex flex-col gap-1.5 w-full md:max-w-[130px] flex-shrink-0">
        <label className="text-[10px] text-stone-500 uppercase tracking-widest font-medium">
          Guests
        </label>
        <input
          type="number"
          min={1}
          max={20}
          value={guests}
          onChange={(e) => {
            setGuests(e.target.value);
            setErrors((prev) => ({ ...prev, guests: null }));
          }}
          className={inputClass("guests")}
        />
        {errors.guests && (
          <p className="text-red-500 text-[11px]">{errors.guests}</p>
        )}
      </div>

      {/* ── Submit ── */}
      <div className="w-full md:w-auto flex-shrink-0">
        <Button 
          variant="accent" 
          type="submit"
          className="w-full md:w-auto whitespace-nowrap px-8"
        >
          Check Availability
        </Button>
      </div>

    </form>
  );
};

export default RoomChecker;