import { useState ,useEffect} from "react";

export const CardresponseHook = () =>{
    const [cardData, setCardData] = useState(null);
    const [loading, setLoading] = useState(true);

useEffect(() => {
 const fetchCardData = async () => {
        try {
            const response = await fetch('https://run.mocky.io/v3/d8a8f24f-0aa9-4087-b927-98b5a5aa08b6');
            const data = await response.json();
            setCardData(data);
        } catch (error) {
            console.error("Error fetching card data:", error);
        } finally {
            setLoading(false);
        }
    }
        fetchCardData();
    } , [loading]);

    return {
        cardData,
        loading,
    }
}