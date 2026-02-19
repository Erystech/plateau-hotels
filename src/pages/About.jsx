import React from "react";
import Footer from "../components/layout/footer";
import useRooms from "../hooks/useRooms";

const About = () => {
    // FIXED: Call the hook to get data
    const { rooms, loading, error } = useRooms();

    
    return (
        <>

            {/* Hero Section */}
            <section className="relative bg-stone-900 text-white overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(-45deg, #c9a96e 0, #c9a96e 1px, transparent 0, transparent 50%)",
                        backgroundSize: "20px 20px",
                    }}
                />
                <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                    <p className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-3">
                        Plateau Hotels &amp; Resort
                    </p>
                    <h1 className="text-5xl md:text-6xl font-serif font-light leading-tight">
                        About Us
                    </h1>
                    <p className="mt-3 text-stone-400 text-sm tracking-wide">
                        Home &nbsp;/&nbsp;
                        <span className="text-amber-400">About</span>
                    </p>
                </div>
            </section>

            {/* Firebase Rooms Section */}
            <section className="bg-stone-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <p className="text-amber-600 text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
                            From Firebase
                        </p>
                        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 font-light">
                            Available Rooms
                        </h2>
                    </div>

                    {/* Loading State */}
                    {loading && (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
                            <p className="text-stone-500 mt-4">Loading available rooms...</p>
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                            <p className="text-red-600 font-medium">Error loading rooms</p>
                            <p className="text-red-500 text-sm mt-2">{error}</p>
                        </div>
                    )}

                    {/* Rooms Grid */}
                    {!loading && !error && rooms.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {rooms.map((room) => (
                                <div
                                    key={room.id}
                                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-xl hover:border-amber-200 transition-all duration-300"
                                >
                                    {/* Room Image (if available) */}
                                    {room.image && (
                                        <div className="h-48 overflow-hidden">
                                            <img
                                                src={room.image}
                                                alt={room.name}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    )}

                                    <div className="p-6">
                                        {/* Room Name */}
                                        <h3 className="text-xl font-semibold text-stone-800 mb-2">
                                            {room.name}
                                        </h3>

                                        {/* Price */}
                                        <p className="text-amber-600 font-bold text-lg mb-4">
                                            ${room.price}
                                            <span className="text-stone-400 font-normal text-sm ml-1">
                                                / night
                                            </span>
                                        </p>

                                        {/* Capacity */}
                                        {room.capacity && (
                                            <p className="text-stone-600 text-sm mb-4">
                                                <strong>Capacity:</strong> {room.capacity} people
                                            </p>
                                        )}

                                        {/* Features */}
                                        {room.features && room.features.length > 0 && (
                                            <div>
                                                <p className="text-stone-700 text-xs uppercase tracking-widest mb-2">
                                                    Features
                                                </p>
                                                <ul className="space-y-1">
                                                    {room.features.map((feature, index) => (
                                                        <li
                                                            key={index}
                                                            className="flex items-center gap-2 text-stone-600 text-sm"
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Empty State */}
                    {!loading && !error && rooms.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-stone-500 text-lg">No rooms available at the moment.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </>
    );
};

export default About;