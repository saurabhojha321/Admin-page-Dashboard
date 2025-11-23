import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 10000,
});

export const categoriesAPI = {
  getAll: () => api.get("/categories/"),
  create: (formData) =>
    api.post("/categories/", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  delete: (id) => api.delete(`/categories/${id}/`),
};

export default api;
