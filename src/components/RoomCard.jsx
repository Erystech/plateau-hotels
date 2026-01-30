import React from "react";


const RoomCard = () => {
    return(
        <div className="bg-secondary rounded w-80 h-125">
            <img src="/src/assets/images/luxury-room.jpg"
                className="h-62.5 w-full"></img>
            <div>
                <h2>Title</h2>
                <p>Description</p>
                <div class="flex gap-6 text-base text-gray-700">
                    <p class="flex items-center gap-2">
                        <svg class="w-6 h-6 stroke-current text-gray-600" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                            <circle cx="12" cy="7" r="4" />
                            <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
                        </svg>
                        <span class="font-medium">: 2</span>
                    </p>

                    <p class="flex items-center gap-2">
                        <svg class="w-6 h-6 stroke-current text-gray-600" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                            <path d="M3 6v12" />
                            <rect x="5" y="10" width="14" height="5" rx="1" />
                            <rect x="6.5" y="11" width="4" height="2" rx="0.5" />
                            <path d="M3 18h18" />
                        </svg>
                        <span class="font-medium">: 1</span>
                    </p>
                </div>
                <div>
                    <span>$200</span>
                    <Button variant="primary">Book Now</Button>
                </div>
            </div>
        </div>
    )
}
export default RoomCard;