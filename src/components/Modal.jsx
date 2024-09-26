// Modal.jsx
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, onSubmit, data }) => {
  if (!isOpen) return null;

 const handleSubmit = (e) => {
   e.preventDefault();
   const formData = {
     title: e.target.title.value,
     description: e.target.description.value,
     imageUrl: e.target.imageUrl.value,
   };
   onSubmit(formData); // Make sure this is correctly passing formData
   onClose();
 };


  return ReactDOM.createPortal(
    <div style={modalOverlayStyle}>
      <div style={modalStyle}>
        <h2>{data ? "Edit Blog" : "Add New Blog"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            defaultValue={data?.title}
            placeholder="Blog Title"
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="imageUrl"
            defaultValue={data?.imageUrl}
            placeholder="Image URL"
            required
            style={inputStyle}
          />
          <textarea
            name="description"
            defaultValue={data?.description}
            placeholder="Blog Description"
            required
            style={{ ...inputStyle, height: "100px" }}
          />
          <div>
            <button type="submit" style={buttonStyle}>
              {data ? "Update" : "Post"}
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{ ...buttonStyle, backgroundColor: "red" }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

// Inline CSS styles
const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = {
  background: "white",
  padding: "35px",
  borderRadius: "8px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
  width: "300px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "10px 15px",
  marginRight: "10px",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "#28a745",
  color: "white",
  cursor: "pointer",
};

export default Modal;
