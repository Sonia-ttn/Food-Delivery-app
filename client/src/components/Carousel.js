import React from "react";

function Carousel(props) {
  return (
     <div
      id="carouselExample"
      className="carousel slide carousel-fade"
      style={{ objectFit: "contain !important" }}
    >
      <div className="carousel-inner" style={{maxHeight:
      "520px"}}>
        <div className="carousel-caption" style={{ zIndex: "10" }}>
          <div className="d-flex justify-content-center">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={props.Search}
              onChange={(e)=>{props.setSearch(e.target.value)}}
            />{" "}
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
          </div>
        </div>
        <div className="carousel-item active">
          <img
            src="https://source.unsplash.com/random/300×300/?burger"
            className="d-block w-100"
            style={{ filter: "brightness(30%" }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/300×300/?momos"
            className="d-block w-100"
            style={{ filter: "brightness(30%" }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/300×300/?pizza"
            className="d-block w-100"
            style={{ filter: "brightness(30%" }}
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;