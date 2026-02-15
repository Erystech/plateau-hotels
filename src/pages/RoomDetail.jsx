import React from "react";
import { useParams } from 'react-router-dom';
import { getRoomById } from '../data/roomsData';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/footer";
import BookingForm from "../components/layout/BookingForm";

const RoomDetail = () => {
    const { id } = useParams();
    const room = getRoomById(id);

    if (!room) {
        return <div>Room not found!</div>;
    }

    return (
        <div>
            <main className="max-w-7xl mx-auto px-6 py-10">

                {/* ── Hero Image ── */}
                <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-64 md:h-[420px] object-cover rounded-2xl mb-10"
                />

                {/* ── Two-column layout: details (left) + booking form (right) ── */}
                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* ── LEFT: Room Details ── takes up 3/5 of the width ── */}
                    <div className="flex-1 min-w-0">

                        {/* Title */}
                        <h1 className="text-4xl font-serif text-stone-900 font-light">
                            {room.title}
                        </h1>

                        {/* Price */}
                        <p className="text-amber-600 font-bold text-2xl mt-2">
                            ₦{room.price.toLocaleString("en-NG")}
                            <span className="text-stone-400 font-normal text-base ml-1">/ night</span>
                        </p>

                        {/* Divider */}
                        <div className="border-t border-stone-200 my-6" />

                        {/* Description */}
                        <p className="text-stone-600 text-lg leading-relaxed">
                            {room.description}
                        </p>

                        {/* Amenities */}
                        <div className="mt-10">
                            <h2 className="text-xl font-semibold text-stone-800 mb-5 tracking-wide uppercase text-sm">
                                What's Included
                            </h2>
                            <ul className="grid grid-cols-2 gap-3">
                                {room.amenities.map((amenity, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2 text-stone-600 text-sm"
                                    >
                                        <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs flex-shrink-0">
                                            ✓
                                        </span>
                                        {amenity}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* ── RIGHT: Booking Form sidebar ── fixed width ── */}
                    <div className="w-full lg:w-[380px] flex-shrink-0">
                        <BookingForm
                            roomName={room.title}
                            pricePerNight={room.price}
                        />
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default RoomDetail;