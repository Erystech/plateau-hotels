import React from "react";

const RoomCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-56 bg-stone-200" />
      
      {/* Content skeleton */}
      <div className="p-6 space-y-4">
        {/* Title skeleton */}
        <div className="h-6 bg-stone-200 rounded w-3/4" />
        
        {/* Price skeleton */}
        <div className="h-5 bg-stone-200 rounded w-1/2" />
        
        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-stone-200 rounded w-full" />
          <div className="h-4 bg-stone-200 rounded w-5/6" />
        </div>
        
        {/* Button skeleton */}
        <div className="h-10 bg-stone-200 rounded-lg w-full" />
      </div>
    </div>
  );
};

export default RoomCardSkeleton;