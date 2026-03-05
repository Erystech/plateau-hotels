import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/buttons";
import Footer from "../components/layout/footer";

const About = () => {
    const stats = [
        { number: "25+", label: "Years of Excellence" },
        { number: "50K+", label: "Happy Guests" },
        { number: "150+", label: "Luxury Rooms" },
        { number: "98%", label: "Satisfaction Rate" },
    ];   
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

            {/* Story Section */}
            <section className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        
                        {/* Left: Image placeholder */}
                        <div className="relative">
                            <div className="aspect-[4/5] bg-stone-200 rounded-2xl overflow-hidden">
                                {/* Replace with actual image */}
                                <div className="w-full h-full flex items-center justify-center text-stone-400 text-sm">
                                   <img src="public/images/plateau-hotels-exterior.webp" alt="Hotel exterior" />
                                </div>
                            </div>
                            {/* Decorative accent */}
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-100 rounded-2xl -z-10" />
                        </div>

                        {/* Right: Story */}
                        <div>
                            <p className="text-amber-600 text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
                                Our Story
                            </p>
                            <h2 className="text-4xl font-serif text-stone-900 font-light mb-6 leading-tight">
                                Where Luxury Meets Authentic Hospitality
                            </h2>
                            <div className="space-y-4 text-stone-600 leading-relaxed">
                                <p>
                                    Founded in 1998, Plateau Hotels & Resort began with a simple yet ambitious vision: 
                                    to create a sanctuary where world-class luxury meets the warmth of genuine Nigerian hospitality.
                                </p>
                                <p>
                                    Nestled in the heart of Plateau State, our resort has grown from a modest 30-room boutique 
                                    hotel into one of the region's most celebrated luxury destinations. What hasn't changed is our 
                                    unwavering commitment to treating every guest like family.
                                </p>
                                <p>
                                    Today, we're proud to be a cornerstone of the local community, employing over 200 staff members, 
                                    partnering with local artisans, and setting the standard for sustainable luxury in Nigeria.
                                </p>
                            </div>
                            <div className="mt-8 pt-8 border-t border-stone-200">
                                <p className="text-stone-800 font-medium italic">
                                    "Our guests don't just visit — they return. Because this is more than a hotel. 
                                    It's a place where memories are made."
                                </p>
                                <p className="text-stone-500 text-sm mt-2">
                                    — Phoebe Williams, Founder & CEO
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-stone-900 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                                }}
                            >
                                <div className="text-4xl md:text-5xl font-serif font-light text-amber-400 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-stone-400 text-sm tracking-wide">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

           

            {/* CTA Section */}
            <section className="bg-stone-50 py-20 relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 2px 2px, #c9a96e 1px, transparent 0)",
                        backgroundSize: "40px 40px",
                    }}
                />
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-900 font-light mb-6">
                        Experience the Plateau Difference
                    </h2>
                    <p className="text-stone-600 text-lg mb-8 max-w-2xl mx-auto">
                        Join thousands of guests who've made Plateau Hotels their home away from home
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/rooms">
                            <Button>
                                Book Your Stay
                            </Button>
                        </Link>
                        <Link to="/rooms">
                            <Button variant="secondary" >
                                Explore Our Rooms
                            </Button>
                        </Link>    
                    </div>
                </div>
            </section>

            <Footer />

            {/* CSS Animations */}
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </>
    );
};

export default About;