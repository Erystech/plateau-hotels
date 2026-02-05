import React from "react";
import roomsData from "../../data/roomsData";
import RoomCard from "./RoomCard";
import { Link } from "react-router-dom";
import Button from "../ui/buttons";

const FeaturedRooms = () => {
  const featuredRooms = roomsData.filter(room => room.featured);

  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Handpicked for You
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Rooms
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience our most luxurious and sought-after accommodations, curated for the discerning traveler
          </p>
          <p className="italic mt-1 text-primary-dark cursor-pointer">
            <Link to="/rooms">View all rooms ----</Link>
          </p>
        </div>

        {/* Featured Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredRooms.map(room => (
            <RoomCard 
              key={room.id}
              variant="featured"
              image={room.image}
              title={room.title}
              description={room.description}
              onBook={() => console.log(`Booking ${room.title}`)}
            />
          ))
          .slice(0, 3)}
        </div>

      </div>
    </section>
  );
};

export default FeaturedRooms;