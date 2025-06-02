import { useState, useEffect } from "react";

export const CardresponseHook = () => {
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/c98cf791-e6c8-4d95-94fa-6432f96f08ee"
        );
        const data = await response.json();
        setCardData(data);
      } catch (error) {
        console.error("Error fetching card data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCardData();
  }, [loading]);

  return {
    cardData,
    loading,
  };
};
