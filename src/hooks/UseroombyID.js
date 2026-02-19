// hooks/useRoomById.js
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const useRoomById = (roomId) => {
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!roomId) {
            setLoading(false);
            return;
        }

        const fetchRoom = async () => {
            try {
                setLoading(true);
                const roomDocRef = doc(db, "rooms", roomId);
                const roomDoc = await getDoc(roomDocRef);

                if (roomDoc.exists()) {
                    setRoom({
                        id: roomDoc.id,
                        ...roomDoc.data(),
                    });
                } else {
                    setError("Room not found");
                }
                setLoading(false);
            } catch (err) {
                console.error("Error fetching room:", err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchRoom();
    }, [roomId]);

    return { room, loading, error };
};


export default useRoomById;