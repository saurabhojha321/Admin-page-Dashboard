import React, { useState, useEffect } from "react";
import "./CategorySetup.css";
import { categoriesAPI } from "../../services/apiService";

const CategorySetup = () => {
  const [activeTab, setActiveTab] = useState("default");
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    name: "",
    zone: "",
    image: null,
  });

  // 🧩 Fetch categories from backend
  const fetchCategories = async () => {
    try {
      const res = await categoriesAPI.getAll();
      setCategories(res.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // 🧩 Handle form submit (POST API)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("zone", form.zone);
    if (form.image) fd.append("image", form.image);

    try {
      await categoryAPI.create(fd);
      alert("Category Added ✅");
      fetchCategories();
      setForm({ name: "", zone: "", image: null });
    } catch (err) {
      console.error("Error creating category:", err);
    }
  };

  // 🧩 Delete API call
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await categoryAPI.delete(id);
      fetchCategories();
    }
  };

  return (
    <div className="category-setup">
      <h2 className="setup-title">Category Setup</h2>

      {/* ===== Tabs ===== */}
      <div className="tabs">
        <button
          className={activeTab === "default" ? "active" : ""}
          onClick={() => setActiveTab("default")}
        >
          Default
        </button>
        <button
          className={activeTab === "english" ? "active" : ""}
          onClick={() => setActiveTab("english")}
        >
          English
        </button>
      </div>

      {/* ===== Form Section ===== */}
      <form className="form-box" onSubmit={handleSubmit}>
        <div className="form-left">
          <input
            type="text"
            placeholder="Category Name (Default)"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <select
            value={form.zone}
            onChange={(e) => setForm({ ...form, zone: e.target.value })}
          >
            <option value="">Select Zone</option>
            <option>North</option>
            <option>South</option>
            <option>East</option>
            <option>West</option>
          </select>
        </div>

        <div className="form-right">
          <p className="upload-info">
            Image format - jpg, png, jpeg, gif <br />
            Image size - max 2MB <br />
            Ratio - 1:1
          </p>
          <input
            type="file"
            onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="reset-btn"
            onClick={() => setForm({ name: "", zone: "", image: null })}
          >
            RESET
          </button>
          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </div>
      </form>

      {/* ===== Category Table Section ===== */}
      <div className="category-table">
        <div className="table-filters">
          <div className="tabs small-tabs">
            <button className="active">All</button>
            <button>Active</button>
            <button>Inactive</button>
          </div>

          <div className="search-box">
            <input type="text" placeholder="Search here" />
            <button>SEARCH</button>
          </div>
        </div>

        {/* ===== Table Data from Backend ===== */}
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Category name</th>
              <th>Zone</th>
              <th>Status</th>
              <th>Is Featured</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, i) => (
              <tr key={cat.id}>
                <td>{i + 1}</td>
                <td>{cat.name}</td>
                <td>{cat.zone}</td>
                <td>
                  <label className="switch">
                    <input type="checkbox" defaultChecked={cat.status} />
                    <span className="slider"></span>
                  </label>
                </td>
                <td>
                  <label className="switch">
                    <input type="checkbox" defaultChecked={cat.featured} />
                    <span className="slider"></span>
                  </label>
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(cat.id)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="total">Total Categories: {categories.length}</p>
      </div>
    </div>
  );
};

export default CategorySetup;
