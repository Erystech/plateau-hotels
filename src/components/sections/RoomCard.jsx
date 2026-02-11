import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/buttons";

const RoomCard = ({ 
  id,
  image = "",
  title = "",
  description = "",
  guests = 0,
  beds = 0,
  price = 0,
  onBook,
  variant = "full" 
}) => {
  const navigate = useNavigate(); 

  const handleViewDetails = () => {
    navigate(`/rooms/${id}`); 
  };


  const isFeatured = variant === "featured";

  return (
    <div className="bg-secondary rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      style={{
        width: isFeatured ? "100%" : "w-80" 
      }}
    >
      <div className="relative h-[250px] w-full overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="h-full w-full object-cover rounded-t-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 line-clamp-1">
          {title}
        </h2>

        <p className="text-sm text-gray-600 line-clamp-2 min-h-[40px]">
          {description}
        </p>

        {/* Only show amenities on full variant */}
        {!isFeatured && (
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
        )}

        {/* Price and Button - only on full variant */}
        {!isFeatured && (
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
        )}

        
        
          <Button 
            variant="secondary" 
            onClick={handleViewDetails}
            aria-label={`View ${title}`}
          >
            View Details
          </Button>
        
      </div>
    </div>
  );
};

export default RoomCard;