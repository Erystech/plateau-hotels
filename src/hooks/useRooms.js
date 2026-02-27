import { useEffect, useState } from "react";
import { supabase } from "../supabase";




const useRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [ loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () =>{
        const fetchRooms =async ()=>{
            try {
                const { data, error } = await supabase
                    .from('rooms')
                    .select('*');

                if(error) {
                    throw error;
                }

                setRooms(data);
            }catch (error) {
                console.error("Error fetching rooms:", error);
                setError(error.message)
            } finally {
                setLoading(false);
            }
        };
        fetchRooms();
    }, []);
  
  return { rooms, loading, error };

};

export default useRooms;

