import React from "react";
import { useParams } from 'react-router-dom';
import useRoomById from "../hooks/UseroombyID";
import Footer from "../components/layout/footer";
import BookingForm from "../components/layout/BookingForm";

const RoomDetail = () => {
    const { id } = useParams();
    const {room, loading, error } = useRoomById(id);

    if (loading) {
        return (
            <div>
                <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
                    <p className="text-stone-500 mt-4">Loading room details...</p>
                </div>
                <Footer />
            </div>
        );
    }
    if (error || !room) {
        return (
            <div>
                <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6 inline-block">
                        <p className="text-red-600 font-medium text-lg">Room not found</p>
                        <p className="text-red-500 text-sm mt-2">{error || "This room does not exist."}</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    

    return (
        <div>
            <main className="max-w-7xl mx-auto px-6 py-10">

                {/* ── Hero Image ── */}
                <div className="mb-6 cursor-pointer" onClick={() => openLightbox(0)}>
                    <img
                        src={room.image?.[0]}
                        alt={`${room.title} - Main view`}
                        className="w-full h-64 md:h-[480px] object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    />
                </div>

                {/* ── 4-image grid below hero ── */}
                {room.image && room.image.length > 1 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
                        {room.image.slice(1, 5).map((img, index) => (
                            <div
                                key={index}
                                onClick={() => openLightbox(index + 1)}
                                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                            >
                                <img
                                    src={img}
                                    alt={`${room.title} - View ${index + 2}`}
                                    className="w-full h-32 md:h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                                    {index + 2} / {room.image.length}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* ── Two-column layout: details (left) + booking form (right) ── */}
                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* ── LEFT: Room Details ── */}
                    <div className="flex-1 min-w-0">

                        {/* Title */}
                        <h1 className="text-4xl font-serif text-stone-900 font-light">
                            {room.title || room.name}
                        </h1>

                        {/* Price */}
                        <p className="text-amber-600 font-bold text-2xl mt-2">
                            ₦{room.price?.toLocaleString("en-NG")}
                            <span className="text-stone-400 font-normal text-base ml-1">/ night</span>
                        </p>

                        {/* Divider */}
                        <div className="border-t border-stone-200 my-6" />

                        {/* Description */}
                        <p className="text-stone-600 text-lg leading-relaxed">
                            {room.description}
                        </p>

                        {/* Amenities */}
                        {room.amenities && room.amenities.length > 0 && (
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
                        )}
                    </div>

                    {/* ── RIGHT: Booking Form sidebar ── */}
                    <div className="w-full lg:w-[380px] flex-shrink-0">
                        <BookingForm
                            roomName={room.title || room.name}
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