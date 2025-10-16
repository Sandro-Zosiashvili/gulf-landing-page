import axios from "axios";


export const ApIfetch = async (endpoint: string) => {
    try {
        const res = await axios.get(`https://gulf-backend-7isu.onrender.com/${endpoint}`);
        return res.data;
    } catch (err) {
        console.error("API fetch error:", err);
        return null;
    }
};