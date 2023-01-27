
import React from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
function Home() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="caro" >
        <Carousel/>
      </div>
      <div>
        <Card/>
      </div>
      <br/>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;