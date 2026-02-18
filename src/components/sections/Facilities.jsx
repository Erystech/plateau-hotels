import React from "react";
import Icons from "../ui/Icons";

const Facilities = () => {
    const facilities = [
        {
            icon: "rooms",
            title: "Rooms & Suites",
            description: "Varied accommodations from standard to luxury suites, each thoughtfully designed with premium amenities and refined comfort.",
        },
        {
            icon: "security",
            title: "24-Hour Security",
            description: "Round-the-clock on-site personnel and comprehensive surveillance. Secure storage available for your peace of mind.",
        },
        {
            icon: "fitness",
            title: "Fitness Center",
            description: "State-of-the-art exercise equipment and free weights. Complemented by spa services including massages and facials.",
        },
        {
            icon: "swimming",
            title: "Swimming Pool",
            description: "Indoor and outdoor pools for leisure or fitness, surrounded by lush landscaping and comfortable lounging areas.",
        },
        {
            icon: "kitchen",
            title: "Culinary Excellence",
            description: "Award-winning chefs crafting both local and continental dishes, bringing world-class dining to your table.",
        },
    ];

    return (
        <section className="relative bg-stone-50 py-24 overflow-hidden">
            {/* Subtle decorative background pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 2px 2px, #1c1917 1px, transparent 0)",
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="text-amber-600 text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
                        Our Offerings
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-900 font-light mb-4">
                        World-Class Facilities
                    </h2>
                    <p className="text-stone-500 text-sm max-w-2xl mx-auto leading-relaxed">
                        Experience unparalleled amenities designed to elevate every moment of your stay
                    </p>
                </div>

                {/* Facility cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((facility, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl p-8 shadow-sm border border-stone-200 hover:shadow-xl hover:border-amber-200 transition-all duration-500"
                            
                        >
                            {/* Decorative corner accent */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-50 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon */}
                            <div className="relative w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6 group-hover:bg-amber-200 group-hover:scale-110 transition-all duration-300">
                                <Icons name={facility.icon} />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-stone-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                                {facility.title}
                            </h3>

                            {/* Description */}
                            <p className="text-stone-500 text-sm leading-relaxed">
                                {facility.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Facilities;