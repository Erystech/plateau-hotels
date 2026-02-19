import React from "react"; 
import Button from "./buttons";

function RoomCategory({ selectedCategory, onCategoryChange }) {
    
    const categories = ['all', 'deluxe', 'suite', 'standard'];

    return (
        <div className="category-buttons grid grid-cols-2 gap-3 mb-8 lg:grid-cols-4 mx-auto md: grid-cols-4">
            {categories.map((category) => (
                <Button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    
                    variant={selectedCategory === category ? "primary" : "secondary"}
                >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
            ))}
        </div>
    );
}

export default RoomCategory;