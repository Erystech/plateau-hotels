import React, { useState } from "react";
import { storage, db } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc, arrayUnion, setDoc, getDoc } from "firebase/firestore";

const ImageUploader = ({ roomId }) => {
    const [uploading, setUploading] = useState(false);
    const [uploadedUrls, setUploadedUrls] = useState([]);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState("");

    const handleFileUpload = async (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;

        if (!roomId) {
            setError("Please select a room first");
            return;
        }

        setUploading(true);
        setError(null);
        setUploadedUrls([]);
        const urls = [];

        try {
            setProgress("Starting upload...");

            // Upload each file
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                setProgress(`Uploading ${i + 1} of ${files.length}: ${file.name}`);
                
                // Create a unique filename
                const timestamp = Date.now();
                const fileName = `rooms/${roomId}/${timestamp}_${file.name}`;
                
                console.log(`Uploading to: ${fileName}`);
                
                // Create storage reference
                const storageRef = ref(storage, fileName);
                
                // Upload file
                await uploadBytes(storageRef, file);
                console.log(`Uploaded: ${file.name}`);
                
                // Get download URL
                const downloadUrl = await getDownloadURL(storageRef);
                urls.push(downloadUrl);
                
                console.log(`Download URL: ${downloadUrl}`);
            }

            setProgress("Updating Firestore...");

            // Check if document exists and has image field
            const roomRef = doc(db, "rooms", roomId);
            const roomDoc = await getDoc(roomRef);

            if (roomDoc.exists()) {
                const roomData = roomDoc.data();
                
                if (roomData.image && Array.isArray(roomData.image)) {
                    // Image field exists, use arrayUnion
                    await updateDoc(roomRef, {
                        image: arrayUnion(...urls)
                    });
                } else {
                    // Image field doesn't exist, create it
                    await updateDoc(roomRef, {
                        image: urls
                    });
                }
            } else {
                setError("Room document not found in Firestore");
                setUploading(false);
                return;
            }

            setUploadedUrls(urls);
            setProgress("");
            alert(`Successfully uploaded ${urls.length} image(s)!`);
            
            // Reset file input
            e.target.value = "";
        } catch (err) {
            console.error("Upload error:", err);
            setError(`Upload failed: ${err.message}`);
            setProgress("");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="bg-white rounded-xl border border-stone-200 p-6">
            <h3 className="text-lg font-semibold text-stone-800 mb-4">
                Upload Room Images
            </h3>
            
            {/* File Input */}
            <div className="mb-4">
                <label
                    htmlFor="file-upload"
                    className={`block w-full text-center px-4 py-8 border-2 border-dashed rounded-lg transition-colors ${
                        uploading || !roomId
                            ? "border-stone-200 bg-stone-50 cursor-not-allowed"
                            : "border-stone-300 cursor-pointer hover:border-amber-400"
                    }`}
                >
                    <svg
                        className="mx-auto h-12 w-12 text-stone-400 mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                    </svg>
                    <span className="text-stone-600 text-sm">
                        {uploading 
                            ? "Uploading..." 
                            : !roomId 
                            ? "Select a room first" 
                            : "Click to select images (multiple)"}
                    </span>
                </label>
                <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileUpload}
                    disabled={uploading || !roomId}
                    className="hidden"
                />
            </div>

            {/* Room ID Warning */}
            {!roomId && (
                <p className="text-red-500 text-sm mb-4 bg-red-50 p-3 rounded">
                    ⚠️ Please select a room from the list
                </p>
            )}

            {/* Progress */}
            {progress && (
                <div className="mb-4 text-amber-600 text-sm bg-amber-50 p-3 rounded">
                    {progress}
                </div>
            )}

            {/* Uploading State */}
            {uploading && (
                <div className="flex items-center gap-2 text-amber-600 text-sm mb-4">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-amber-600"></div>
                    Processing...
                </div>
            )}

            {/* Error */}
            {error && (
                <div className="bg-red-50 border border-red-200 rounded p-3 text-red-600 text-sm mb-4">
                    <strong>Error:</strong> {error}
                </div>
            )}

            {/* Success - Show uploaded URLs */}
            {uploadedUrls.length > 0 && (
                <div className="mt-4">
                    <p className="text-green-600 text-sm font-medium mb-2 bg-green-50 p-3 rounded">
                        ✓ Successfully uploaded {uploadedUrls.length} image(s)
                    </p>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                        {uploadedUrls.map((url, index) => (
                            <div key={index} className="flex gap-2 bg-stone-50 p-2 rounded">
                                <img
                                    src={url}
                                    alt={`Upload ${index + 1}`}
                                    className="w-16 h-16 object-cover rounded flex-shrink-0"
                                />
                                <input
                                    type="text"
                                    value={url}
                                    readOnly
                                    onClick={(e) => e.target.select()}
                                    className="flex-1 text-xs bg-white border border-stone-200 rounded px-2 py-1 cursor-pointer"
                                    title="Click to select URL"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageUploader;