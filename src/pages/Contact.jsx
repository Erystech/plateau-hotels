import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/footer";
import Button from "../components/ui/buttons";
import Icons from "../components/ui/Icons";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validate = (data) => {
        const errs = {};
        if (!data.name.trim())
            errs.name = "Name is required.";
        if (!data.email.trim())
            errs.email = "Email address is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
            errs.email = "Please enter a valid email address.";
        if (!data.phone.trim())
            errs.phone = "Phone number is required.";
        else if (!/^\+?[\d\s\-]{7,15}$/.test(data.phone))
            errs.phone = "Please enter a valid phone number.";
        if (!data.message.trim())
            errs.message = "Message is required.";
        else if (data.message.trim().length < 10)
            errs.message = "Message must be at least 10 characters.";
        return errs;
    };

    const handleChange = (e) => {
        const updated = { ...formData, [e.target.name]: e.target.value };
        setFormData(updated);
        // Re-validate the changed field live if it's already been touched
        if (touched[e.target.name]) {
            const errs = validate(updated);
            setErrors((prev) => ({ ...prev, [e.target.name]: errs[e.target.name] }));
        }
    };

    const handleBlur = (e) => {
        setTouched((prev) => ({ ...prev, [e.target.name]: true }));
        const errs = validate(formData);
        setErrors((prev) => ({ ...prev, [e.target.name]: errs[e.target.name] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mark all fields as touched on submit attempt
        const allTouched = { name: true, email: true, phone: true, message: true };
        setTouched(allTouched);
        const errs = validate(formData);
        setErrors(errs);
        if (Object.keys(errs).length === 0) {
            // All valid — handle submission here
            alert("Message sent successfully!");
        }
    };

    const contactCards = [
        {
            icon: "rooms",
            title: "Make a Call",
            subtitle: "Make a call for general enquiries",
            value: "+234-90-19942996",
        },
        {
            icon: "rooms",
            title: "Send a Mail",
            subtitle: "Send a mail for general enquiries",
            value: "info@plateauhotels.com",
        },
        {
            icon: "rooms",
            title: "Toll Free",
            subtitle: "Toll free number for staying guests",
            value: "+234-90-19942996",
        },
    ];

    const quickContacts = [
        { label: "Restaurant", number: "+234-90-1234556" },
        { label: "Laundry", number: "+234-90-1234556" },
        { label: "Kitchen", number: "+234-90-1234556" },
        { label: "Spa", number: "+234-90-1234556" },
    ];

    return (
        <>

            {/* ── Hero Banner ── */}
            <section className="relative bg-stone-900 text-white overflow-hidden">
                {/* Decorative diagonal accent */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(-45deg, #c9a96e 0, #c9a96e 1px, transparent 0, transparent 50%)",
                        backgroundSize: "20px 20px",
                    }}
                />
                <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                    <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3 text-amber-400">
                        Plateau Hotels &amp; Resort
                    </p>
                    <h1 className="text-5xl md:text-6xl font-serif font-light leading-tight">
                        Get In Touch
                    </h1>
                    <p className="mt-3 text-stone-400 text-sm tracking-wide">
                        Home &nbsp;/&nbsp;
                        <span className="text-amber-400">Contact</span>
                    </p>
                </div>
            </section>

            {/* ── Location ── */}
            <section className="bg-stone-50 py-20">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-amber-600 text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
                            Our Location
                        </p>
                        <h2 className="text-4xl font-serif text-stone-800 mb-6 leading-snug">
                            Find Us Here
                        </h2>
                        <address className="not-italic text-stone-600 text-lg leading-relaxed mb-8 border-l-4 border-amber-400 pl-5">
                            Plateau Hotels And Resort
                            <br />
                            Amphitheater Parkway,
                            <br />
                            Mountain View, Plateau
                            <br />
                            545303
                        </address>
                        <Button>Find Us on Map</Button>
                    </div>

                    {/* Decorative placeholder map card */}
                    <div className="rounded-2xl overflow-hidden shadow-xl bg-stone-200 h-64 flex items-center justify-center">
                        <p className="text-stone-400 text-sm tracking-widest uppercase">
                            Map Embed
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Contact Cards ── */}
            <section className="bg-white py-20 border-t border-stone-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-0 divide-x divide-stone-200 border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
                        {contactCards.map((card, i) => (
                            <div
                                key={i}
                                className="group flex flex-col items-center text-center p-10 hover:bg-amber-50 transition-colors duration-300"
                            >
                                <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-5 group-hover:bg-amber-200 transition-colors duration-300">
                                    <Icons name={card.icon} />
                                </div>
                                <h3 className="text-stone-800 font-semibold text-lg mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-stone-500 text-sm mb-4 leading-relaxed">
                                    {card.subtitle}
                                </p>
                                <p className="text-amber-600 font-medium tracking-wide">
                                    {card.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Contact Form + Quick Contact ── */}
            <section className="bg-stone-50 py-20">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-16">

                    {/* Form — takes 3 cols */}
                    <div className="md:col-span-3">
                        <p className="text-amber-600 text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
                            Contact Form
                        </p>
                        <h2 className="text-4xl font-serif text-stone-800 mb-3">
                            Drop a Line...
                        </h2>
                        <p className="text-stone-500 text-sm mb-10 leading-relaxed">
                            Please feel free to get in touch with us using the form below.
                            We'd love to hear from you.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                            <div className="grid sm:grid-cols-2 gap-5">
                                {/* Name */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs text-stone-500 uppercase tracking-widest">
                                        Your Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="John Doe"
                                        required
                                        className={`border rounded-lg px-4 py-3 text-stone-800 placeholder-stone-400 text-sm bg-white focus:outline-none focus:ring-2 focus:border-transparent transition
                                            ${errors.name && touched.name
                                                ? "border-red-400 focus:ring-red-300"
                                                : "border-stone-300 focus:ring-amber-400"
                                            }`}
                                    />
                                    {errors.name && touched.name && (
                                        <p className="text-red-500 text-xs mt-0.5">{errors.name}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs text-stone-500 uppercase tracking-widest">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="john@example.com"
                                        required
                                        className={`border rounded-lg px-4 py-3 text-stone-800 placeholder-stone-400 text-sm bg-white focus:outline-none focus:ring-2 focus:border-transparent transition
                                            ${errors.email && touched.email
                                                ? "border-red-400 focus:ring-red-300"
                                                : "border-stone-300 focus:ring-amber-400"
                                            }`}
                                    />
                                    {errors.email && touched.email && (
                                        <p className="text-red-500 text-xs mt-0.5">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs text-stone-500 uppercase tracking-widest">
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
                                    className={`border rounded-lg px-4 py-3 text-stone-800 placeholder-stone-400 text-sm bg-white focus:outline-none focus:ring-2 focus:border-transparent transition
                                        ${errors.phone && touched.phone
                                            ? "border-red-400 focus:ring-red-300"
                                            : "border-stone-300 focus:ring-amber-400"
                                        }`}
                                />
                                {errors.phone && touched.phone && (
                                    <p className="text-red-500 text-xs mt-0.5">{errors.phone}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs text-stone-500 uppercase tracking-widest">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="How can we help you?"
                                    rows={5}
                                    required
                                    className={`border rounded-lg px-4 py-3 text-stone-800 placeholder-stone-400 text-sm bg-white focus:outline-none focus:ring-2 focus:border-transparent transition resize-none
                                        ${errors.message && touched.message
                                            ? "border-red-400 focus:ring-red-300"
                                            : "border-stone-300 focus:ring-amber-400"
                                        }`}
                                />
                                {errors.message && touched.message && (
                                    <p className="text-red-500 text-xs mt-0.5">{errors.message}</p>
                                )}
                            </div>

                            <Button variant="accent">Submit Message</Button>
                        </form>
                    </div>

                    {/* Quick Contact — takes 2 cols */}
                    <div className="md:col-span-2">
                        <p className="text-amber-600 text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
                            Direct Lines
                        </p>
                        <h2 className="text-4xl font-serif text-stone-800 mb-3">
                            Quick Contact
                        </h2>
                        <p className="text-stone-500 text-sm mb-10 leading-relaxed">
                            Contact us directly for all your needs.
                        </p>

                        <div className="space-y-3">
                            {quickContacts.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between bg-white border border-stone-200 rounded-xl px-5 py-4 hover:border-amber-300 hover:shadow-md transition-all duration-200 group"
                                >
                                    <span className="text-stone-700 font-semibold text-sm group-hover:text-amber-600 transition-colors">
                                        {item.label}
                                    </span>
                                    <span className="text-stone-500 text-sm tracking-wide">
                                        {item.number}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Decorative block */}
                        <div className="mt-10 bg-stone-900 text-white rounded-2xl p-8">
                            <p className="text-amber-400 text-xs tracking-[0.25em] uppercase mb-3">
                                Working Hours
                            </p>
                            <p className="text-2xl font-serif mb-4">We're Always Here</p>
                            <p className="text-stone-400 text-sm leading-relaxed">
                                Our front desk is available{" "}
                                <span className="text-white font-medium">24 hours a day</span>,
                                7 days a week to assist you with anything you need.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Contact;