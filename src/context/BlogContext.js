import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const BlogContext = createContext();

export const useBlog = () => {
  return useContext(BlogContext);
};

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const apiEndpoint =
    "https://crudcrud.com/api/c61ae2e480644604961908afc1d2ab3d/blogs"; // Replace with your actual endpoint

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(apiEndpoint);
      setBlogs(response.data);
      console.log("Fetched blogs:", response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const addBlog = async (formData) => {
    try {
      const response = await axios.post(apiEndpoint, formData); // Post to API
      setBlogs((prev) => [...prev, response.data]); // Add the new blog using the response
      console.log("Added blog:", response.data);
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  const updateBlog = async (id, formData) => {
    try {
      await axios.put(`${apiEndpoint}/${id}`, formData); // Update the blog on API
      setBlogs(
        (prev) =>
          prev.map((blog) =>
            blog._id === id ? { ...blog, ...formData } : blog
          ) // Update the correct blog by its API ID
      );
      console.log("Updated blog:", id);
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const deleteBlog = async (id) => {
    if (!id) {
      console.error("No ID provided for deletion");
      return; // Exit if no ID
    }
    try {
      await axios.delete(`${apiEndpoint}/${id}`); // Delete the blog from API
      setBlogs((prev) => prev.filter((blog) => blog._id !== id)); // Filter out the deleted blog
      console.log("Deleted blog:", id);
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
