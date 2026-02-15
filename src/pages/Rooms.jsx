import React, { useState } from "react";
import roomsData from "../data/roomsData";
import RoomCategory from "../components/ui/RoomCategory";
import RoomCard from "../components/sections/RoomCard";


const Rooms = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredRooms = selectedCategory === "all"
    ? roomsData
    : roomsData.filter(room => room.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Our Rooms
      </h1>
      
      <RoomCategory 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRooms.map((room) => (
          <RoomCard
            key={room.id}
            variant="full"
            {...room}
          />
        ))}
      </div>
      
    </div>
  );
};

export default Rooms;