import React, { useState } from "react";
import useRooms from "../../hooks/useRooms";
import RoomCard from "./RoomCard";
import { Link } from "react-router-dom";


const FeaturedRooms = () => {
  const {rooms, loading, error } = useRooms();

  const featuredRooms = rooms.filter(room => room.featured);

  return (
    <section className="relative py-20 bg-stone-50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-600 text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
            Handpicked for You
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 font-light mb-4">
            Featured Rooms
          </h2>
          <p className="text-stone-500 text-sm max-w-2xl mx-auto leading-relaxed mb-6">
            Experience our most luxurious and sought-after accommodations, curated for the discerning traveler
          </p>
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 text-amber-600 font-medium text-sm hover:text-amber-700 transition-colors group"
          >
            View all rooms
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
            <p className="text-stone-500 mt-4">Loading featured rooms...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
            <p className="text-red-600 font-medium">Error loading featured rooms</p>
            <p className="text-red-500 text-sm mt-2">{error}</p>
          </div>
        )}

        {/* Featured Rooms Grid */}
        {!loading && !error && featuredRooms.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.slice(0, 3).map((room, index) => (
              <div
                key={room.id}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                <RoomCard 
                  variant="featured"
                  {...room}
                  onBook={() => console.log(`Booking ${room.title || room.name}`)}
                />
              </div>
            ))}
          </div>
        )}

        {/* Empty State - No featured rooms */}
        {!loading && !error && featuredRooms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-stone-500 text-lg mb-4">
              No featured rooms available at the moment.
            </p>
            <Link
              to="/rooms"
              className="inline-block text-amber-600 hover:text-amber-700 font-medium"
            >
              View all available rooms
            </Link>
          </div>
        )}

      </div>

      {/* CSS Animation */}
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
    </section>
  );
};

export default FeaturedRooms;