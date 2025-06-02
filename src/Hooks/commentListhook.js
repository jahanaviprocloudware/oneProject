import { useState, useEffect } from "react";

export const CommentListHook = () => {
  const [commentData, setCommentData] = useState(null); // <-- fixed here
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommentData = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/d8a8f24f-0aa9-4087-b927-98b5a5aa08b6"
        );
        const data = await response.json();
        setCommentData(data);
      } catch (error) {
        console.error("Error fetching comment data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCommentData();
  }, []);

  return {
    commentData,
    loading,
  };
};
