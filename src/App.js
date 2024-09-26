// App.jsx
import React from "react";
import Blog from "./components/Blog";
import { BlogProvider } from "./context/BlogContext";

function App() {
  const appStyle = {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    background: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#007bff",
  };

  return (
    <BlogProvider>
      <div style={appStyle}>
        <h1 style={headerStyle}>Blog Website</h1>
        <Blog />
      </div>
    </BlogProvider>
  );
}

export default App;
