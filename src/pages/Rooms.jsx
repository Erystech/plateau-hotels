import React from "react";
import roomsData from "../data/roomsData";
import RoomCard from "../components/sections/RoomCard";
const Rooms = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Our Rooms
      </h1>

      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-8
      ">
        {roomsData.map((room, index) => (
          <RoomCard
            key={room.id || index}
            image={room.image}
            title={room.title}
            description={room.description}
            guests={room.guests}
            beds={room.beds}
            price={room.price}
          />
        ))}
      </div>
    </div>
  );
};


export default Rooms;