import { useEffect, useState } from "react";

export const TableDataHook = () => {
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/a1f854e2-3972-437a-904c-27a4399da286"
        );
        const data = await response.json();
        setResponseData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [loading]);

  return {
    responseData,
    loading,
  };
};
