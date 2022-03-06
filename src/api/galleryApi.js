import axiosClient from "./axiosClient";

const galleryApi = {
  getGallery: (params) => {
    const url = "gallery";
    return axiosClient.get(url, { params });
  },
};

export default galleryApi;
