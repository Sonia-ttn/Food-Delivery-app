import React from "react";
import {useEffect, useState } from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
// import { useDispatchCart,useCart } from "../components/ContextReducer";
function Home() {
  const [foodItem, setFoodItem] = useState([]);
  const [foodCat, setFoodCat] = useState([]);
  const [search, setSearch] = useState('');


  const loadData = async () => {
    let data = await fetch("http://localhost:5000/api/displayfood", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let response = await data.json();
    setFoodItem(response[0]);
    setFoodCat(response[1])
    console.log(response[0]);
  };
  useEffect(() => {
    loadData();
    
  }, []);

  return (
    <div className="con bg-light">
      <div>
        <Nav />
      </div>
      <div className="caro">
        <Carousel search={search} setSearch={setSearch} />
      </div>
      <div className="container">
        {
        foodCat.length !== 0
        
          ? 
          foodCat.map((data)=>{
            return(
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.categoryName}
                </div>
                <hr/>
                {foodItem.length !==0?
                foodItem.filter((item)=>(item.categoryName === data.categoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))
                )
                .map(filterItems=>{
                  return (
                    //normal view div occupy 12 but size goes md(medium) div occupy 6
                    <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                      <Card foodItem={filterItems} 
                      options={filterItems.options[0]} 
                      >
                      </Card>
                    </div>
                  )
                })
                :
                <div>No Such DATA found!!</div>} 

              </div>
            )
          })
          : 
          <div>No Such DATA found!!</div>
          }
        
      </div>
      <br />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
