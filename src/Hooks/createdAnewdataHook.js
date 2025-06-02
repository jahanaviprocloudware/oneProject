export const createdAnewdataHook = async (props) => {
  const { userName, userEmail, userId, isUpdated } = props;

  try {
    const response = await fetch(
      isUpdated?.lenght > 0
        ? `https://reqres.in/api/users/${userId}`
        : "https://run.mocky.io/v3/7335d310-9519-4cb3-b4e5-a66376671e3f",
      {
        method: isUpdated ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: userId || Date.now(),
          name: userName || "",
          email: userEmail || "",
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching new data:", error);
    throw error;
  }
};
