import axios from "axios";

const BASE_URL = "http://localhost:3001/api";

async function createUser(userData) {
    try {
        const response = await axios.post(`${BASE_URL}/user/createAccount`, userData);
        return response.data;
    } catch (error) {
        console.error("Error while creating user ", error);
        throw error;
    }
}

async function loginUser(userData) {
    try {
        const response = await axios.post(`${BASE_URL}/user/signin`,userData)
        return response.data;
    } catch (error) {
        console.error("Error while login user ", error);
        throw error;
    }
}

export { createUser,loginUser};
