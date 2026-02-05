import React from "react";
import Icons from "../ui/Icons";

const Footer = () => {
    return (
       <footer className="bg-primary text-neutral-light">
            <div className="container mx-auto px-6 md:px-12 lg:px-40 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <div className="space-y-6">
                        <h1 className="text-2xl md:text-3xl font-bold italic text-secondary">
                            Plateau Hotels
                        </h1>
                        <p className="text-neutral-light/80 text-sm">
                            Experience luxury and comfort at its finest. Your perfect getaway awaits.
                        </p>
                        <div className="flex gap-4">
                            <a 
                                href="https://wa.me/2349019942996" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform duration-200"
                                aria-label="WhatsApp"
                            >
                                <Icons 
                                    name="whatsapp"
                                    color="#fff"
                                    size={28} 
                                />
                            </a>
                            <a 
                                href="#" 
                                className="hover:scale-110 transition-transform duration-200"
                                aria-label="Facebook"
                            >
                                <Icons 
                                    name="facebook"
                                    color="#fff"
                                    size={28}
                                />
                            </a>
                            <a 
                                href="#" 
                                className="hover:scale-110 transition-transform duration-200"
                                aria-label="Twitter"
                            >
                                <Icons 
                                    name="twitter"
                                    color="#fff"
                                    size={28}
                                />
                            </a>
                        </div>
                    </div>

                    {/* Location Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-secondary uppercase tracking-wide">
                            Our Location
                        </h2>
                        <address className="not-italic text-neutral-light/90 text-sm leading-relaxed">
                            Plateau Hotels And Resort<br/>
                            Ampitheater Parkway,<br/>
                            Mountain View, Plateau<br/>
                            545303
                        </address>

                        <div className="space-y-3 pt-2">
                            <a 
                                href="https://wa.me/2349019942996" 
                                className="flex items-center gap-2 text-sm hover:text-secondary transition-colors duration-200"
                            >
                                <Icons 
                                    name="whatsapp"
                                    color="#fff"
                                    size={20}
                                />
                                <span>+234 901 994 2996</span>
                            </a>
                            <a 
                                href="mailto:plateauhotels@plateau.com" 
                                className="flex items-center gap-2 text-sm hover:text-secondary transition-colors duration-200"
                            >
                                <Icons 
                                    name="email"
                                    color="#fff"
                                    size={20}
                                />
                                <span>plateauhotels@plateau.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-secondary uppercase tracking-wide">
                            Services
                        </h2>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-secondary transition-colors duration-200 hover:translate-x-1 inline-block">
                                    The Resort
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-secondary transition-colors duration-200 hover:translate-x-1 inline-block">
                                    Booking
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-secondary transition-colors duration-200 hover:translate-x-1 inline-block">
                                    Our Rooms
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-secondary transition-colors duration-200 hover:translate-x-1 inline-block">
                                    Amenities
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-secondary transition-colors duration-200 hover:translate-x-1 inline-block">
                                    Media Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-secondary transition-colors duration-200 hover:translate-x-1 inline-block">
                                    Business
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-secondary uppercase tracking-wide">
                            Quick Links
                        </h2>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-secondary transition-colors duration-200 hover:translate-x-1 inline-block">
                                    Our Clients
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-secondary transition-colors duration-200 hover:translate-x-1 inline-block">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-secondary transition-colors duration-200 hover:translate-x-1 inline-block">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-secondary transition-colors duration-200 hover:translate-x-1 inline-block">
                                    News
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-secondary transition-colors duration-200 hover:translate-x-1 inline-block">
                                    Career
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-neutral-light/20">
                <div className="container mx-auto px-6 md:px-12 lg:px-40 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-light/70">
                        <p>
                            Copyright {new Date().getFullYear()} &copy;{" "}
                            <span className="italic text-secondary">plateau-hotels</span>. 
                            All rights reserved.
                        </p>
                        <ul className="flex gap-6">
                            <li>
                                <a href="#" className="hover:text-secondary transition-colors duration-200">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-secondary transition-colors duration-200">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
       </footer>
    );
};

export default Footer;