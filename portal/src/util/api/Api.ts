import axios, { AxiosRequestConfig } from "axios";

const defaultConfig = {
    baseURL: process.env.BASE_API,
    timeout: 5000
};

function createApi(config?: AxiosRequestConfig) {
    return axios.create({
        ...config,
        ...defaultConfig
    });
}

export default createApi;