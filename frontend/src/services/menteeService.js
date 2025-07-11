import { createAPIInstance, API_BASE_URL } from "../utils/api";
const mentee = createAPIInstance(API_BASE_URL);

export const getAvailableMentors = async () => {
    try {
        const response = await mentee.get('/mentee/home');
        return response.data;
    } catch (err) {
        console.error("Error fetching mentors", err);
        throw err;
    }
}

export const sendRequest = async (menteeId, mentorId) => {
    const data = { menteeId, mentorId };
    try {
        const response = await mentee.post('/request', data);
        return response.data;
    } catch (err) {
        console.error("Error sending request", err);
        throw err;
    }
}

export const removeRequest = async (requestId) => {
    try {
        const response = await mentee.delete(`/request/remove/${requestId}`);
        return response.data;
    } catch (err) {
        console.error("Error removing request", err);
        throw err;
    }
}

export const getAllPendingRequests = async () => {
    try {
        const response = await mentee.get('/pending');
        return response.data;
    } catch (err) {
        console.error("Error fetching pending requests");
        throw err;
    }
}