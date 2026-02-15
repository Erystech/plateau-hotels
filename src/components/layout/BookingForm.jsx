import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../ui/buttons";

const BookingForm = ({ roomName = "Deluxe Suite", pricePerNight = 45000 }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        adults: 1,
        children: 0,
        rooms: 1,
    });
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    // ── Derived values ─────────────────────────────────────────────
    const nights =
        checkInDate && checkOutDate
            ? Math.max(
                  1,
                  Math.round(
                      (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
                  )
              )
            : null;

    const subtotal = nights ? nights * pricePerNight * formData.rooms : null;
    const tax = subtotal ? Math.round(subtotal * 0.075) : null;
    const total = subtotal ? subtotal + tax : null;

    const fmt = (n) => "₦" + n.toLocaleString("en-NG");

    // ── Validation ─────────────────────────────────────────────────
    const validate = (data, checkIn, checkOut) => {
        const errs = {};
        if (!data.name.trim()) errs.name = "Full name is required.";
        if (!data.phone.trim()) errs.phone = "Phone number is required.";
        else if (!/^\+?[\d\s\-]{7,15}$/.test(data.phone))
            errs.phone = "Enter a valid phone number.";
        if (!checkIn) errs.checkIn = "Check-in date is required.";
        if (!checkOut) errs.checkOut = "Check-out date is required.";
        if (data.adults < 1) errs.adults = "At least 1 adult required.";
        if (data.rooms < 1) errs.rooms = "At least 1 room required.";
        return errs;
    };

    const handleChange = (e) => {
        const updated = { ...formData, [e.target.name]: e.target.value };
        setFormData(updated);
        if (touched[e.target.name]) {
            const errs = validate(updated, checkInDate, checkOutDate);
            setErrors((prev) => ({ ...prev, [e.target.name]: errs[e.target.name] }));
        }
    };

    const handleBlur = (e) => {
        setTouched((prev) => ({ ...prev, [e.target.name]: true }));
        const errs = validate(formData, checkInDate, checkOutDate);
        setErrors((prev) => ({ ...prev, [e.target.name]: errs[e.target.name] }));
    };

    const handleCheckInChange = (date) => {
        setCheckInDate(date);
        if (checkOutDate && date && checkOutDate <= date) setCheckOutDate(null);
        if (touched.checkIn) {
            const errs = validate(formData, date, checkOutDate);
            setErrors((prev) => ({ ...prev, checkIn: errs.checkIn }));
        }
    };

    const handleCheckOutChange = (date) => {
        setCheckOutDate(date);
        if (touched.checkOut) {
            const errs = validate(formData, checkInDate, date);
            setErrors((prev) => ({ ...prev, checkOut: errs.checkOut }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const allTouched = {
            name: true, phone: true, checkIn: true,
            checkOut: true, adults: true, rooms: true,
        };
        setTouched(allTouched);
        const errs = validate(formData, checkInDate, checkOutDate);
        setErrors(errs);
        if (Object.keys(errs).length === 0) {
            alert("Booking submitted successfully!");
        }
    };

    // ── Style helpers ──────────────────────────────────────────────
    const inputClass = (field) =>
        `w-full border rounded-md px-3 py-2.5 text-stone-800 placeholder-stone-400 text-sm bg-white focus:outline-none focus:ring-2 focus:border-transparent transition ${
            errors[field] && touched[field]
                ? "border-red-400 focus:ring-red-300"
                : "border-stone-300 focus:ring-amber-400"
        }`;

    return (
        <div className="sticky top-8 rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-white text-sm">

            {/* ── Header ── */}
            <div
                className="px-6 py-5 text-white"
                style={{ background: "linear-gradient(135deg, #1c1917 0%, #292524 100%)" }}
            >
                <p className="text-amber-400 text-[10px] tracking-[0.3em] uppercase mb-1">
                    Confirm Booking
                </p>
                <h2 className="text-xl font-serif font-light leading-snug">
                    {roomName}
                </h2>
                <p className="text-stone-400 text-xs mt-1 tracking-wide">
                    {fmt(pricePerNight)}{" "}
                    <span className="text-stone-500">/ night</span>
                </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="px-6 py-6 space-y-4">

                {/* ── Full Name ── */}
                <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-stone-500 uppercase tracking-widest">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="John Doe"
                        required
                        className={inputClass("name")}
                    />
                    {errors.name && touched.name && (
                        <p className="text-red-500 text-[11px]">{errors.name}</p>
                    )}
                </div>

                {/* ── Phone ── */}
                <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-stone-500 uppercase tracking-widest">
                        Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="+234 000 000 0000"
                        required
                        className={inputClass("phone")}
                    />
                    {errors.phone && touched.phone && (
                        <p className="text-red-500 text-[11px]">{errors.phone}</p>
                    )}
                </div>

                {/* ── Divider ── */}
                <div className="border-t border-stone-100 pt-1" />

                {/* ── Check-in ── */}
                <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-stone-500 uppercase tracking-widest">
                        Check-in Date <span className="text-red-500">*</span>
                    </label>
                    <DatePicker
                        selected={checkInDate}
                        onChange={handleCheckInChange}
                        onBlur={() => setTouched((p) => ({ ...p, checkIn: true }))}
                        dateFormat="dd MMM yyyy"
                        placeholderText="Select date"
                        minDate={new Date()}
                        className={inputClass("checkIn")}
                        wrapperClassName="w-full"
                    />
                    {errors.checkIn && touched.checkIn && (
                        <p className="text-red-500 text-[11px]">{errors.checkIn}</p>
                    )}
                </div>

                {/* ── Check-out ── */}
                <div className="flex flex-col gap-1">
                    <label className={`text-[10px] uppercase tracking-widest ${!checkInDate ? "text-stone-300" : "text-stone-500"}`}>
                        Check-out Date <span className="text-red-500">*</span>
                    </label>
                    <DatePicker
                        selected={checkOutDate}
                        onChange={handleCheckOutChange}
                        onBlur={() => setTouched((p) => ({ ...p, checkOut: true }))}
                        dateFormat="dd MMM yyyy"
                        placeholderText={!checkInDate ? "Select check-in first" : "Select date"}
                        minDate={
                            checkInDate
                                ? new Date(checkInDate.getTime() + 86400000)
                                : new Date()
                        }
                        disabled={!checkInDate}
                        className={`${inputClass("checkOut")} ${!checkInDate ? "bg-stone-50 cursor-not-allowed" : ""}`}
                        wrapperClassName="w-full"
                    />
                    {errors.checkOut && touched.checkOut && checkInDate && (
                        <p className="text-red-500 text-[11px]">{errors.checkOut}</p>
                    )}
                </div>

                {/* ── Divider ── */}
                <div className="border-t border-stone-100 pt-1" />

                {/* ── Guests: Adults · Children · Rooms ── */}
                <div className="grid grid-cols-3 gap-3">
                    <div className="flex flex-col gap-1">
                        <label className="text-[10px] text-stone-500 uppercase tracking-widest">
                            Adults <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            name="adults"
                            value={formData.adults}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            min={1}
                            max={10}
                            className={inputClass("adults")}
                        />
                        {errors.adults && touched.adults && (
                            <p className="text-red-500 text-[11px]">{errors.adults}</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-[10px] text-stone-500 uppercase tracking-widest">
                            Children
                        </label>
                        <input
                            type="number"
                            name="children"
                            value={formData.children}
                            onChange={handleChange}
                            min={0}
                            max={10}
                            className={inputClass("children")}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-[10px] text-stone-500 uppercase tracking-widest">
                            Rooms <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            name="rooms"
                            value={formData.rooms}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            min={1}
                            max={10}
                            className={inputClass("rooms")}
                        />
                        {errors.rooms && touched.rooms && (
                            <p className="text-red-500 text-[11px]">{errors.rooms}</p>
                        )}
                    </div>
                </div>

                {/* ── Live Price Summary — only appears when dates are selected ── */}
                {nights && (
                    <div className="rounded-xl bg-stone-50 border border-stone-200 px-4 py-4 space-y-2">
                        <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-3">
                            Price Breakdown
                        </p>
                        <div className="flex justify-between text-stone-600">
                            <span>
                                {fmt(pricePerNight)} × {nights} night{nights > 1 ? "s" : ""}
                                {formData.rooms > 1 ? ` × ${formData.rooms} rooms` : ""}
                            </span>
                            <span className="font-medium text-stone-800">{fmt(subtotal)}</span>
                        </div>
                        <div className="flex justify-between text-stone-400 text-xs">
                            <span>Taxes &amp; fees (7.5%)</span>
                            <span>{fmt(tax)}</span>
                        </div>
                        <div className="border-t border-stone-200 pt-3 flex justify-between items-center">
                            <span className="font-semibold text-stone-800">Total</span>
                            <span className="font-bold text-amber-600 text-base">{fmt(total)}</span>
                        </div>
                    </div>
                )}

                {/* ── Submit ── */}
                <div className="pt-1">
                    <Button variant="accent" className="w-full justify-center">
                        Confirm Booking
                    </Button>
                    <p className="text-center text-stone-400 text-[11px] mt-3 tracking-wide">
                        No payment charged until check-in
                    </p>
                </div>

            </form>
        </div>
    );
};

export default BookingForm;