import React from "react";

const ImageDetails = ({ title, description, imageUrl, onEdit, onDelete }) => {
  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img src={imageUrl} alt={title} style={imageStyle} />
      </div>
      <div style={contentStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={descriptionStyle}>{description}</p>
        <div style={buttonGroupStyle}>
          <button onClick={onEdit} style={editButtonStyle}>
            Edit
          </button>
          <button onClick={onDelete} style={deleteButtonStyle}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

// Inline CSS styles
const containerStyle = {
  display: "flex",
  alignItems: "flex-start",
  padding: "15px",
  marginBottom: "20px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#f9f9f9",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const imageContainerStyle = {
  flex: "0 0 120px", // Set fixed width for image container
  marginRight: "20px",
  overflow: "hidden",
  borderRadius: "8px",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  objectFit: "cover", // Ensures the image covers its container
  borderRadius: "8px",
  transition: "transform 0.3s ease",
};

const contentStyle = {
  flex: "1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const titleStyle = {
  margin: "0 0 10px",
  fontSize: "20px",
  fontWeight: "600",
  color: "#333",
};

const descriptionStyle = {
  margin: "0 0 15px",
  color: "#666",
  lineHeight: "1.5",
};

const buttonGroupStyle = {
  display: "flex",
  gap: "10px", // Adds spacing between buttons
};

const editButtonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  padding: "8px 12px",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

const deleteButtonStyle = {
  backgroundColor: "#dc3545",
  color: "#fff",
  border: "none",
  padding: "8px 12px",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};



export default ImageDetails;
