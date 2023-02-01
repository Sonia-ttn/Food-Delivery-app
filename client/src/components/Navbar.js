import React from "react";
import { Link,useNavigate } from "react-router-dom";

function Navbar() {
  const nav= useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem("token");
    console.log("logged out")
    nav("/login");
    
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            GoFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("token") ? (
                <li className="nav-item">
                  <Link className="nav-link active fs-5" aria-current="page" to="/orders">my Orders</Link>
                </li>
              ) : ("")
              }
            </ul>
            {!localStorage.getItem("token") ? (
              <div className="d-flex ">
                <Link className="btn bg-white text-success mx-1 " to="/login"> Login</Link>

                <Link className="btn bg-white text-success mx-1" to="/signup">Signup</Link>
              </div>
            ) : (
              <div className="d-flex ">
                <div className="btn bg-white text-success mx-2">My Cart</div>

                <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>Logout</div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
