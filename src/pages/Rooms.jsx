import React, { useState } from "react";
import useRooms from "../hooks/useRooms";
import RoomCategory from "../components/ui/RoomCategory";
import RoomCard from "../components/sections/RoomCard";

const Rooms = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

 const { rooms, loading, error } = useRooms();

  const filteredRooms = selectedCategory === "all"
    ? rooms
    : rooms.filter(room => room.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <>
            
          <h1 className="mt-2 text-center text-5xl md:text-6xl font-serif font-light leading-tight">
            Our Rooms & Suites
          </h1>
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Category Filter */}
        <RoomCategory 
          selectedCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
        />

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
            <p className="text-stone-500 mt-4">Loading rooms...</p>
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
              />
            ))}
          </div>
        )}

        {/* Empty State - No rooms match filter */}
        {!loading && !error && filteredRooms.length === 0 && rooms.length > 0 && (
          <div className="text-center py-20">
            <p className="text-stone-500 text-lg">
              No rooms found in the "{selectedCategory}" category.
            </p>
            <button
              onClick={() => setSelectedCategory("all")}
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

      
    </>
  );
};

export default Rooms;