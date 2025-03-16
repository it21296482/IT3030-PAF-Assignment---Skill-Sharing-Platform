import axios from "axios";

const API_URL = "http://localhost:8081/users"; // Spring Boot backend URL

// Fetch all users
export const getAllUsers = async () => {
    return await axios.get(`${API_URL}/all`);
};

// Add a new user
export const addUser = async (user) => {
    return await axios.post(`${API_URL}/add`, user);
};
