const apiPort = process.env.REACT_APP_API_PORT || 5000; // Default to port 5000 if not set
const apiBaseUrl = `http://localhost:${apiPort}/api`;

// Fetch question data
export const fetchQuestions = async () => {
  try {
    const response = await fetch(`${apiBaseUrl}/questions`);
    if (!response.ok) {
      throw new Error("Failed to fetch questions");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching question data:", error);
    throw error;
  }
};

// Add other API methods as needed
