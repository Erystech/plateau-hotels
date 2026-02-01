import React from "react";
import Button from "../ui/buttons";

const RoomCard = ({ 
  image = "/images/luxury-room.jpg",
  title = "Title",
  description = "Description",
  guests = 2,
  beds = 1,
  price = 200,
  onBook
}) => {
  return (
    <div className="bg-secondary rounded-2xl w-80 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-[250px] w-full overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="h-full w-full object-cover rounded-t-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col p-6 space-y-4">
       
        <h2 className="text-2xl font-bold text-gray-900 line-clamp-1">
          {title}
        </h2>

        <p className="text-sm text-gray-600 line-clamp-2 min-h-[40px]">
          {description}
        </p>

        <div className="flex gap-6 text-base">
          <div className="flex items-center gap-2 text-gray-700">
            <svg 
              className="w-5 h-5 stroke-current text-gray-600" 
              viewBox="0 0 24 24" 
              fill="none" 
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="12" cy="7" r="4" />
              <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
            </svg>
            <span className="font-medium">{guests} Guests</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <svg 
              className="w-5 h-5 stroke-current text-gray-600" 
              viewBox="0 0 24 24" 
              fill="none" 
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M3 6v12" />
              <rect x="5" y="10" width="14" height="5" rx="1" />
              <rect x="6.5" y="11" width="4" height="2" rx="0.5" />
              <path d="M3 18h18" />
            </svg>
            <span className="font-medium">{beds} {beds === 1 ? 'Bed' : 'Beds'}</span>
          </div>
        </div>

        <div className="flex flex-col pt-2">
          <div className="flex items-baseline gap-4 mb-2">
            <span className="text-3xl font-bold text-accent">
              ${price}
            </span>
            <span className="text-sm font-bold text-gray-500">per night</span>
          </div>
          <Button 
            variant="primary" 
            onClick={onBook}
            aria-label={`Book ${title}`}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;