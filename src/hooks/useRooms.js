import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";



const useRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [ loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () =>{
        const fetchRooms =async ()=>{
            try {
                const roomCollectionRef = collection(db, "rooms");
                const querySnapshot = await getDocs(roomCollectionRef);

                const roomsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setRooms(roomsData);
                setLoading(false);
            }catch (error) {
                console.error("Error fetching rooms:", error);
                setLoading(false);
            }
        };
        fetchRooms();
    }, []);
  
  return { rooms, loading, error };

};

export default useRooms;

