import React from "react";
import { useParams } from 'react-router-dom';
import { getRoomById } from '../data/roomsData';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/footer";
import Button from "../components/ui/buttons";
const RoomDetail = () => {
    const {id} = useParams();

    const room = getRoomById(id);
    
    if (!room) {
    return <div>Room not found!</div>;
    }

    return (
        <div>
            <main className="container mx-auto p-6">
                {/* Hero Image */}
                <img 
                src={room.image} 
                alt={room.title}
                className="w-full h-64 md:h-[400px] object-cover rounded-lg"
                />
                
                {/* Title */}
                <h1 className="text-4xl font-bold mt-6">
                {room.title}
                </h1>
                
                {/* Description */}
                <p className="text-lg text-neutral-medium mt-4">
                {room.description}
                </p>
                
                {/* Price */}
                <div className="text-3xl font-bold text-accent mt-6">
                ${room.price} <span className="text-base">/ night</span>
                </div>
                
                {/* Amenities */}
                <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Amenities</h2>
                <ul className="grid grid-cols-2 gap-2">
                    {room.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center gap-2">
                        ✓ {amenity}
                    </li>
                    ))}
                </ul>
                </div>
                
                {/* Book Now Button */}
                <Button variant="primary" size="lg" className="mt-8">
                Book This Room
                </Button>
            </main>
            
            <Footer />
        </div>
    )
}
export default RoomDetail;