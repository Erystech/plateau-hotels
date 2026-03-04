import React, { use, useState } from "react";
import { useParams } from 'react-router-dom';
import useRoomById from "../hooks/UseroombyID";
import Footer from "../components/layout/footer";
import BookingForm from "../components/layout/BookingForm";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const RoomDetail = () => {
    const { id } = useParams();
    const {room, loading, error } = useRoomById(id);

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    //lightbox functions
    const openLightbox = (i) => {
        setCurrentImageIndex(i);
        setLightboxOpen(true);

        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'unset';
    };

    const nextImage = () => {
        if(room?.image) {
            setCurrentImageIndex((prev) => (prev + 1) % room.image.length);
        }
    };

    const prevImage = () => {
        if (room?.image) {
            setCurrentImageIndex((prev) => (prev - 1 + room.image.length) % room.image.length)
        }
    };

    //Keyboard navigation 
    React.useEffect(() => {
        const handlekeyDown = (e) => {
            if(!lightboxOpen) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };

        window.addEventListener('keydown', handlekeyDown);

    }, [lightboxOpen, currentImageIndex]);

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
                <div
                    className="relative group mb-6 cursor-pointer"
                    onClick={() => openLightbox(0)}
                    >
                    <img
                        src={room.image?.[0]}
                        alt={`${room.title} - Main view`}
                        className="w-full h-64 md:h-[480px] object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    />

                    {/* Zoom Overlay */}
                    
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
            
            {/* ── LIGHTBOX MODAL ── */}
            {lightboxOpen && room.image && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fadeIn"
                    onClick={closeLightbox}
                >
                    {/* Close button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-4xl w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors z-20"
                        aria-label="Close gallery"
                    >
                        x
                    </button>

                    {/* Previous arrow */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                        className="absolute left-4 md:left-8 text-white text-4xl md:text-5xl w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors z-20"
                        aria-label="Previous image"
                    >
                        ‹
                    </button>

                    {/* Image container */}
                    <div
                        className="relative max-w-7xl max-h-[90vh] w-full mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={room.image[currentImageIndex]}
                            alt={`${room.title || room.name} - Image ${currentImageIndex + 1}`}
                            className="w-full h-full object-contain rounded-lg"
                        />
                        
                        {/* Image counter & info */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                            <div className="bg-black/70 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
                                {currentImageIndex + 1} / {room.image.length}
                            </div>
                        </div>
                    </div>

                    {/* Next arrow */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                        className="absolute right-4 md:right-8 text-white text-4xl md:text-5xl w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors z-20"
                        aria-label="Next image"
                    >
                        ›
                    </button>

                    {/* Thumbnails */}
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-4 pb-2 scrollbar-hide">
                        {room.image.map((img, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex(index);
                                }}
                                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                                    index === currentImageIndex
                                        ? 'border-amber-400 scale-110'
                                        : 'border-white/30 hover:border-white/60'
                                }`}
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}


            <Footer />
        </div>
    );
};

export default RoomDetail;