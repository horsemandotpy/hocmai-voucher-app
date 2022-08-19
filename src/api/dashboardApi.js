import axiosClient from "./apiClient";

const dashboardApi = {
    getList (path) {
        const response = axiosClient.get(path);
        return response;
    },

    create (path, data) {
        const response = axiosClient.post(path, data);
        return response;
    }

}

export default dashboardApi;