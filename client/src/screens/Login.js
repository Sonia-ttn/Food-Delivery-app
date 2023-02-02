import React from 'react';
import { useState} from 'react';
import { Link,useNavigate} from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const nav=useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("entered")
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(
        // Add parameters here
        { 
         email: credentials.email ,
         password: credentials.password }
      )
      
    });
    console.log("Response",response.json)
    const json = await response.json();
    console.log("json",json);

    if (!json.success) {
      alert("Enter Valid credentials!");
    }
    if(json.success){
      console.log("token",json.token);
      localStorage.setItem('token',json.token.token)
      localStorage.setItem('email',credentials.email)

     localStorage.getItem('token');

      nav("/")
    }
  };
  const valChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      
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

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <Link to="/signup" className="m-3 btn btn-danger">
      I'm a New user    
      </Link>
    </form>
  </div>
  )
}

export default Login