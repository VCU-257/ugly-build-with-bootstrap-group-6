import React, { useState } from "react";

export default function Login() {
  // Keep username and password in state
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  // update fields when typing
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // on click function for login button
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Login attempt:", formData);

    // Replace this later: Check username and password from our back-end when built
    if (!formData.usernameOrEmail || !formData.password) {
      alert("Please enter both username/email and password!");
      return;
    }

    // Replace this later: instead of an alert we need to store user data in browser(localstorage?) 
    // and reroute to search
    alert("Login successful!"); 
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-sm p-4" style={{ maxWidth: "400px", width: "90%" }}>
        <h2 className="card-title text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="usernameOrEmail" className="form-label">Username or Email</label>
            <input
              type="text"
              id="usernameOrEmail"
              className="form-control"
              placeholder="Enter your username or email"
              value={formData.usernameOrEmail}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Login</button>

          <p className="text-center mt-3">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}