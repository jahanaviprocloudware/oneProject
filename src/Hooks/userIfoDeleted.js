export const userInfoDeleted = async (userId) => {
  try {
    const response = await fetch(`https://reqres.in/api/users/${userId}`, {
      method: 'DELETE',
    });

    let data = null;
    if (response.status === 200 || response.status !== 202) { 
      data = await response.json();
    }
    return data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}