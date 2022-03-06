import axiosClient from "./axiosClient";

const pagesApi = {
  getPages: (id) => {
    const url = "pages";
    return axiosClient.get(url, { id });
  },
};

export default pagesApi;
