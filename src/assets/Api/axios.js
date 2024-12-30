import axios from "axios";

const AxiosInstance = axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
    withCredentials: true, 
})
AxiosInstance.interceptors.response.use(
    response => response,
    async error => {
        if (error.response.status === 403) {
            try {
                await axios.get(`${import.meta.env.VITE_BASE_URL}Transpoter/Refresh`);
                return axios(error.config);
            } catch (refreshError) {
                console.error('Token refresh failed:', refreshError.response.data);
                throw refreshError;
            }
        }
        throw error;
    }
);

export { AxiosInstance }; 