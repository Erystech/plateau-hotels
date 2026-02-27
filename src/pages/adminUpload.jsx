import React, { useState } from "react";
import useRooms from "../hooks/useRooms";
import ImageUploader from "../components/ui/imageUploader";  
import Footer from "../components/layout/footer";

const AdminUpload = () => {
    const { rooms, loading, error } = useRooms();
    const [selectedRoomId, setSelectedRoomId] = useState("");

    return (
        <>
            <div className="min-h-screen bg-stone-50">
                <div className="max-w-6xl mx-auto px-6 py-16">
                    
                    {/* Header */}
                    <div className="mb-10">
                        <h1 className="text-4xl font-serif text-stone-900 font-light mb-2">
                            Upload Room Images
                        </h1>
                        <p className="text-stone-500 text-sm">
                            Select a room and upload images to supabase Storage
                        </p>
                    </div>

                    {/* Loading State */}
                    {loading && (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
                            <p className="text-stone-500 mt-4">Loading rooms...</p>
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                            <p className="text-red-600 font-medium">Error loading rooms</p>
                            <p className="text-red-500 text-sm mt-2">{error}</p>
                        </div>
                    )}

                    {/* Main Content */}
                    {!loading && !error && (
                        <div className="grid md:grid-cols-2 gap-8">
                            
                            {/* LEFT: Room Selector */}
                            <div>
                                <h2 className="text-xl font-semibold text-stone-800 mb-4 flex items-center gap-2">
                                    Select Room
                                </h2>
                                
                                {rooms.length === 0 ? (
                                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
                                        <p className="text-amber-800 font-medium">No rooms found</p>
                                        <p className="text-amber-600 text-sm mt-2">
                                            Please add rooms to Firestore first
                                        </p>
                                    </div>
                                ) : (
                                    <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
                                        {rooms.map((room) => (
                                            <button
                                                key={room.id}
                                                onClick={() => setSelectedRoomId(room.id)}
                                                className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                                                    selectedRoomId === room.id
                                                        ? "border-amber-400 bg-amber-50 shadow-md"
                                                        : "border-stone-200 bg-white hover:border-amber-200 hover:shadow-sm"
                                                }`}
                                            >
                                                <div className="flex items-start justify-between gap-3">
                                                    <div className="flex-1 min-w-0">
                                                        <div className="font-medium text-stone-800 truncate">
                                                            {room.title || room.name || "Untitled Room"}
                                                        </div>
                                                        <div className="text-xs text-stone-500 mt-1">
                                                            ID: {room.id}
                                                        </div>
                                                        {room.image && room.image.length > 0 && (
                                                            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                </svg>
                                                                {room.image.length} image(s)
                                                            </div>
                                                        )}
                                                    </div>
                                                    {selectedRoomId === room.id && (
                                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center">
                                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    )}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* RIGHT: Image Uploader */}
                            <div>
                                <h2 className="text-xl font-semibold text-stone-800 mb-4 flex items-center gap-2">
                                    Upload Images
                                </h2>
                                
                                <ImageUploader roomId={selectedRoomId} />
                                
                                {/* Current Images Preview */}
                                {selectedRoomId && (
                                    <div className="mt-6 bg-white rounded-xl border border-stone-200 p-6">
                                        <h3 className="text-sm font-semibold text-stone-700 mb-3 flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            Current Images
                                        </h3>
                                        {rooms.find(r => r.id === selectedRoomId)?.image?.length > 0 ? (
                                            <div className="grid grid-cols-3 gap-2">
                                                {rooms
                                                    .find(r => r.id === selectedRoomId)
                                                    .image.map((url, index) => (
                                                        <div key={index} className="relative group">
                                                            <img
                                                                src={url}
                                                                alt={`Room ${index + 1}`}
                                                                className="w-full h-24 object-cover rounded-lg border border-stone-200"
                                                            />
                                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-lg transition-colors" />
                                                        </div>
                                                    ))}
                                            </div>
                                        ) : (
                                            <p className="text-stone-400 text-sm text-center py-6">
                                                No images uploaded yet
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>

                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default AdminUpload;