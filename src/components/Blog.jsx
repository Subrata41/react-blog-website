import React, { useState } from "react";
import Modal from "./Modal";
import ImageDetails from "./ImageDetails";
import { useBlog } from "../context/BlogContext";

const Blog = () => {
  const { blogs, addBlog, updateBlog, deleteBlog } = useBlog();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  const handleOpenModal = () => {
    setCurrentBlog(null);
    setIsModalOpen(true);
  };

  const handleEditBlog = (blog) => {
    setCurrentBlog(blog);
    setIsModalOpen(true);
  };

  const handleSubmit = (formData) => {
    if (currentBlog) {
      updateBlog(currentBlog._id, formData); // Ensure _id is used for updates
    } else {
      addBlog(formData);
    }
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentBlog(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={handleOpenModal} style={addButtonStyle}>
        Add New Blog
      </button>
      <div>
        {blogs.map((blog) => (
          <ImageDetails
            key={blog._id} // Unique key based on _id
            title={blog.title}
            description={blog.description}
            imageUrl={blog.imageUrl}
            onEdit={() => handleEditBlog(blog)}
            onDelete={() => deleteBlog(blog._id)} // Correctly passing _id
          />
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        data={currentBlog}
      />
    </div>
  );
};

const addButtonStyle = {
  cursor: "pointer",
  backgroundColor: "#28a745",
  color: "white",
  padding: "10px 15px",
  border: "none",
  borderRadius: "4px",
};

export default Blog;
