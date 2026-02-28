import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import useRooms from "../hooks/useRooms";
import RoomCategory from "../components/ui/RoomCategory";
import RoomCard from "../components/sections/RoomCard";
import RoomCardSkeleton from "../components/ui/RoomCardSkeleton";
import Footer from "../components/layout/footer";

const Rooms = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchParams] = useSearchParams();
  const { rooms, loading, error } = useRooms();

  // Extract search params
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const guests = parseInt(searchParams.get("guests")) || 0;
  const nights = parseInt(searchParams.get("nights")) || 0;

  // Filter by category
  const categoryFilteredRooms = selectedCategory === "all"
    ? rooms
    : rooms.filter(room => room.category?.toLowerCase() === selectedCategory.toLowerCase());

  // Filter by guest capacity (if search params exist)
  const filteredRooms = guests > 0
    ? categoryFilteredRooms.filter(room => (room.guests || 0) >= guests)
    : categoryFilteredRooms;

  // Format dates for display
  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { 
      month: "short", 
      day: "numeric", 
      year: "numeric" 
    });
  };


  const navigate = useNavigate();


  return (
    <>
	<h1 className="mt-2 text-center text-5xl md:text-6xl font-serif font-light leading-tight">
            Our Rooms & Suites
          </h1>
     
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Search Summary (if search params exist) */}
        {checkIn && checkOut && guests > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h2 className="text-lg font-semibold text-stone-800 mb-2">
                  Search Results
                </h2>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-600">
                  <div>
                    <span className="font-medium text-stone-700">Check-in:</span> {formatDate(checkIn)}
                  </div>
                  <div>
                    <span className="font-medium text-stone-700">Check-out:</span> {formatDate(checkOut)}
                  </div>
                  <div>
                    <span className="font-medium text-stone-700">Guests:</span> {guests}
                  </div>
                  <div>
                    <span className="font-medium text-stone-700">Nights:</span> {nights}
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate('/rooms')}
                className="text-amber-600 hover:text-amber-700 text-sm font-medium"
              >
                Clear Search
              </button>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <RoomCategory 
          selectedCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
        />

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <RoomCardSkeleton key={n} />
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center my-12">
            <p className="text-red-600 font-medium">Error loading rooms</p>
            <p className="text-red-500 text-sm mt-2">{error}</p>
          </div>
        )}

        {/* Rooms Grid */}
        {!loading && !error && filteredRooms.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <RoomCard
                key={room.id}
                variant="full"
                {...room}
                // Pass search params to the card if needed
                searchParams={checkIn && checkOut ? {
                  checkIn,
                  checkOut,
                  guests,
                  nights
                } : null}
              />
            ))}
          </div>
        )}

        {/* Empty State - No rooms match filter */}
        {!loading && !error && filteredRooms.length === 0 && rooms.length > 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-6 bg-stone-100 rounded-full mb-4">
              <svg className="w-12 h-12 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-stone-500 text-lg mb-2">
              {guests > 0 
                ? `No rooms available for ${guests} guests in the "${selectedCategory}" category.`
                : `No rooms found in the "${selectedCategory}" category.`
              }
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                window.location.href = '/rooms';
              }}
              className="mt-4 text-amber-600 hover:text-amber-700 font-medium"
            >
              View all rooms
            </button>
          </div>
        )}

        {/* Empty State - No rooms at all */}
        {!loading && !error && rooms.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stone-500 text-lg">No rooms available at the moment.</p>
          </div>
        )}

      </div>

      <Footer />
    </>
  );
};

export default Rooms;