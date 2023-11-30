import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://assignment-survey-resource-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;