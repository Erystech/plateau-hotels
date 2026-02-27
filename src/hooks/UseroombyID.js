// hooks/useRoomById.js
import { useEffect, useState } from "react";
import { supabase } from "../supabase";

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
                
                // Supabase query to get a single room by matching the ID
                const { data, error } = await supabase
                    .from('rooms')
                    .select('*')
                    .eq('id', roomId)
                    .single(); // .single() tells Supabase to return an object instead of an array

                if (error) {
                    throw error;
                }

                if (data) {
                    setRoom(data);
                } else {
                    setError("Room not found");
                }
            } catch (err) {
                console.error("Error fetching room:", err.message);
                setError(err.message);
            } finally {
                 setLoading(false);
            }
        };

        fetchRoom();
    }, [roomId]);

    return { room, loading, error };
};

export default useRoomById;