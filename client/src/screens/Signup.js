import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("entered")
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(
        // Add parameters here
        { name: credentials.name ,
         email: credentials.email ,
         location: credentials.location ,
         password: credentials.password }
      )
      
    });
    console.log("Response",response.json)
    const json = await response.json();
    console.log("json",json);

    if (!json.success) {
      alert("Enter Valid credentials!");
    }
  };
  const valChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={credentials.name}
            onChange={valChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={credentials.email}
            onChange={valChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={credentials.password}
            onChange={valChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <input
            type="Location"
            className="form-control"
            name="location"
            value={credentials.location}
            onChange={valChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/login" className="m-3 btn btn-danger">
          Already a User?
        </Link>
      </form>
    </div>
  );
}

export default Signup;
