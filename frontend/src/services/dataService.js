import { createAPIInstance, API_BASE_URL } from "../utils/api";
const auths = createAPIInstance(`${API_BASE_URL}/auth`);

export const registerUser = async (user) => {
    try {
        const data = {
            ...user,
            availability: user.availability.join(', '),
            description: user.interests.join(', '),
            role: user.role.toUpperCase(),
            classification: user.classification.toUpperCase(),
        };
        const response = await auths.post('/signup', data);
        return response.data;
    } catch (err) {
        console.error("Error signing up", err);
        throw err;
    }
}

export const loginUser = async (email, password) => {
    try {
        const data = {
            email,
            password
        };

        const response = await auths.post('/login', data);
        return response.data;
    } catch (err) {
        console.error("Error logging in", err);
        throw err;
    }
}

export const isLoggedIn = async () => {
    try {
        const response = await auths.get('/me');
        return response.data;
    } catch (err) {
        console.error("Log In", err);
        throw err;
    }
}

export const logoutUser = async() => {
    try {
        const response = await auths.post('/logout');
        return response.data;
    } catch (err) {
        console.error("Error logging out", err);
        throw err;
    }
}