import axios, { AxiosRequestConfig } from "axios";

export async function get<T>(url: string, config?: AxiosRequestConfig) {
    return axios.get<T>(url, config);
}

export async function post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return axios.post<T>(url, data, config);
}

export async function put<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return axios.put<T>(url, data, config);
}

export async function patch<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return axios.patch<T>(url, data, config);
}

export async function del<T>(url: string, config?: AxiosRequestConfig) {
    return axios.delete<T>(url, config);
}

axios.interceptors.request.use(
    config => {
        config.headers = Object.assign(config.headers, {
            Authorization: `Bearer ` + localStorage.getItem("AccessToken")
        });
        return config;
    },
    error => Promise.reject(error)
);

axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/sign-in";
        }
        return Promise.reject(error);
    }
);
