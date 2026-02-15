import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "./buttons";

const RoomChecker = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ checkInDate, checkOutDate, guests });
  };
  const inputClass =
    "w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 placeholder-stone-400 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition";

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white/95  rounded-xl border border-white/40 px-8 py-6 flex flex-col md:flex-row gap-5 items-end"
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
          }}
          dateFormat="dd MMM yyyy"
          placeholderText="Select date"
          minDate={new Date()}
          className={inputClass}
          wrapperClassName="w-full"
        />
      </div>

      {/* ── Check-out ── */}
      <div className="flex flex-col gap-1.5 w-full">
        <label className={`text-[10px] uppercase tracking-widest font-medium ${!checkInDate ? "text-stone-300" : "text-stone-500"}`}>
          Check-out Date
        </label>
        <DatePicker
          selected={checkOutDate}
          onChange={(date) => setCheckOutDate(date)}
          dateFormat="dd MMM yyyy"
          placeholderText={!checkInDate ? "Select check-in first" : "Select date"}
          minDate={
            checkInDate
              ? new Date(checkInDate.getTime() + 86400000)
              : new Date()
          }
          disabled={!checkInDate}
          className={`${inputClass} ${!checkInDate ? "bg-stone-100 cursor-not-allowed" : ""}`}
          wrapperClassName="w-full"
        />
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
          onChange={(e) => setGuests(e.target.value)}
          className={inputClass}
        />
      </div>

      {/* ── Submit ── */}
      <div className="w-full md:w-auto flex-shrink-0">
        <Button variant="accent" className="w-full md:w-auto whitespace-nowrap px-8">
          Check Availability
        </Button>
      </div>

    </form>
  );
};

export default RoomChecker;