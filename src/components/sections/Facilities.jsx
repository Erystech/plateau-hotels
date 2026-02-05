import React from "react";
import Icons from "../ui/Icons";


const Facilities = () => {
    return (
        <section className="bg-accent-dark">
            <span className="inline-block text-sm font-semibold text-neutral-light uppercase tracking-widest mb-3">
                Facilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Hotel Facilities
            </h2>
            <div className="grid grid-cols-1 m-auto md:grid-cols-2 lg:grid-cols-3 gap-4 w-[80%]">
                <div className="flex flex-col text-center items-center gap-2 mr-1.5 bg-secondary rounded w-80">
                    <Icons name="rooms"/>
                    <h2>Rooms and Suites</h2>
                    <p>Varied types of rooms, from standard to luxury suites, equipped with essentials like beds.</p>
                </div>
                <div className="flex flex-col text-center items-center gap-2 mr-1.5 bg-secondary rounded w-80">
                    <Icons name="security"/>
                    <h2>24-hour Security</h2>
                    <p>On-site security personnel and best surveillance. from standard to luxury suites,Secure storage for valuables.</p>
                </div>
                <div className="flex flex-col text-center items-center gap-2 mr-1.5 bg-secondary rounded w-80">
                    <Icons name="fitness"/>
                    <h2>Fitness Center</h2>
                    <p>Equipped with exercise machines and weights.Offering massages, facials, and other treatments.</p>
                </div>
                <div className="flex flex-col text-center items-center gap-2 mr-1.5 bg-secondary rounded w-80">
                    <Icons name="swimming"/>
                    <h2>Swimming Pool</h2>
                    <p>Indoor or outdoor pools for leisure or exercise.Offering massages, facials, and other treatments</p>
                </div>
                <div className="flex flex-col text-center items-center gap-2 mr-1.5 bg-secondary rounded w-80">
                    <Icons name="kitchen"/>
                    <h2>Kitchen</h2>
                    <p>Bringing the best meals. Both local an continental dishes. closer to you</p>
                </div>
            </div>
        </section>
    )
}






export default Facilities;
